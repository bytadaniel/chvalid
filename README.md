# chvalid by @bytadaniel

A simple utility to generate datatype schemas for Clickhouse and validate incoming rows

### Create model from schema and validate rows to insert query
```js
	import { UInt32, String, Map } from './src/types'
	import { Schema } from './src/schema'
	import { model } from './src/model'

	const developerSchema = new Schema({
		age: new UInt32({ default: -1 }),
		name: new String({ default: 'john doe' }),
		skills: new Map()
	})

	type IDeveloper = {
		age: number,
		name: string,
		skills: Record<string, string>
	}

	const DeveloperModel = model<IDeveloper>(developerSchema, 'database', 'table')

	console.log(DeveloperModel.$getCreateQuery()) // CREATE TABLE IS NOT EXISTS ...

	DeveloperModel.$createInsertQuery([
		{
			age: Infinity, // Infonoty is not valid - error
			name: null, // type is not string - error
			// skills is not defined - error
		}
	]) // INSERT INTO database.table (age UInt32 DEFAULT -1, name String DEFAULT 'john doe' ...
```

### 🔥 Killer feature
Create model automaticly from DDL
```js
	import { modelFromCreateQuery } from './src/helpers/model-from-create-query'

	const ddl = `CREATE TABLE database.table (age UInt32, name String, ...)`

	const DeveloperModel = modelFromCreateQuery(ddl)

	DeveloperModel.#createInsertQuery([...rows])
```