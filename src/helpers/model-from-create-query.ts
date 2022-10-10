import fs from 'fs'
import path from 'path'
import { model, Schema } from '../..'
import * as Types from '../types'

const ddl = fs.readFileSync(path.resolve(__dirname, './ddl.txt')).toString()

console.log(ddl)


export function modelFromCreateQuery (_ddl: string) {
	const loweddl = ddl.trim()

	const [database, table] = loweddl
		.split('(')[0].trim()
		.split(' ')
		.find(str => str.includes('.'))!
		.split('.')

	const columnList = loweddl
		.split('(')[1]

	console.log(columnList)
	// 	.split(')')[0]
	// 	.replace(/`/gm, '')
	// 	.replace(/\n/gm, '')
	// 	.split(',').map(strings => {
	// 		const [key, type, ...other] = strings.trim().split(' ') as [string, keyof typeof Types] & string[]

	// 		const defaultWordIndex = other.map(o => o.toLowerCase()).findIndex(c => c === 'default')

	// 		if (!Types[type]) {
	// 			console.log({
	// 				Types, type
	// 			})
	// 		}

	// 		const typeInstance = new Types[type]()

	// 		if (defaultWordIndex != -1) {
	// 			const defaultValue = other[defaultWordIndex + 1]
	// 			if (!isNaN(Number(defaultValue))) {
	// 				typeInstance.options.default = Number(defaultValue)
	// 			} else {
	// 				typeInstance.options.default = defaultValue
	// 			}
	// 		}
	// 		return [key, typeInstance]
	// 	})

	// const schemaOptions = Object.fromEntries(columnList)

	// return model(new Schema(schemaOptions), database, table)
}