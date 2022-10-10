import ss from 'sqlstring'
import { Schema } from "../schema";

type BaseInterface = Record<string, any>

class Model<ModelInterface extends BaseInterface> {
  constructor (
		protected readonly schema: Schema,
		protected readonly database: string,
		protected readonly table: string
	) {}

	private get tableName () {
		return `${this.database}.${this.table}`
	}

	private validateRow (row: ModelInterface) {
		for (const [column, value] of Object.entries(row)) {
			const property = this.schema.properties[column]
			const hasPropertyInSchema = this.schema.properties.hasOwnProperty(column)
			if (!hasPropertyInSchema) {
				throw new Error(`${column} is not defined in [${this.table}] table schema`)
			}

			const hasValidValue = property.validate(value)
			if (!hasValidValue) {
				throw new Error(`[${column}] does not match defined schema while its [${value}] type is incompatible with ${property.getType()}`)
			}
		}
	}
 
	public $getCreateQuery (): string {
		return `
			CREATE TABLE IF NOT EXISTS ${this.tableName} (${
				Object.entries(this.schema.properties).map(([name, type]) => {
					const rowParts: string[] = []
					rowParts.push(name, type.getType())
					if (type.options.default) {
						rowParts.push(`DEFAULT ${type.options.default}`)
					}
					return rowParts.join(' ')
				}).join(', ')
			})
		`
	}

	public $createInsertQuery (rows: ModelInterface[]) {
		rows.forEach(row => this.validateRow(row))

		const rowsSQL = rows.map(row => {
			const values = Object.keys(this.schema.properties).map(key => ss.escape(row[key]))
			return `(${values.join(',')})`
		})

		return `INSERT INTO ${this.tableName} (${Object.keys(this.schema.properties).join(', ')}) VALUES ${rowsSQL.join(' ')}`
	}
}

export function model<IncomingModelInterface extends BaseInterface>(schema: Schema, database: string, name: string) {
	return new Model<IncomingModelInterface>(schema, database, name)
}