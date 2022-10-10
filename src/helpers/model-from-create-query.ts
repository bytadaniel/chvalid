import { model, Schema } from '../..'
import * as Types from '../types'


export function modelFromCreateQuery (ddl: string) {
	const loweddl = ddl.trim()

	const [database, table] = loweddl
		.split('(')[0].trim()
		.split(' ')
		.find(str => str.includes('.'))!
		.split('.')

	const columnList = loweddl
		.split('(')[1]
		.split(')')[0]
		.replace(/`/gm, '')
		.replace(/\n/gm, '')
		.split(',').map(strings => {
			const [key, type, ...other] = strings.trim().split(' ') as [string, keyof typeof Types] & string[]

			const defaultWordIndex = other.map(o => o.toLowerCase()).findIndex(c => c === 'default')

			if (!Types[type]) {
				console.log('!!!unknown type!!!!', {
					Types, type
				})
			}

			const typeInstance = new Types[type]()

			if (defaultWordIndex != -1) {
				const defaultValue = other[defaultWordIndex + 1]
				if (!isNaN(Number(defaultValue))) {
					typeInstance.options.default = Number(defaultValue)
				} else {
					typeInstance.options.default = defaultValue
				}
			}
			return [key, typeInstance]
		})

	const schemaOptions = Object.fromEntries(columnList)

	return model(new Schema(schemaOptions), database, table)
}