// /*
	import * as Types from './src/types'
	import { Schema } from './src/schema'
	import { model } from './src/model'
	import { modelFromCreateQuery } from './src/helpers/model-from-create-query'

	console.log(modelFromCreateQuery(''))

	const articleStatsSchema = new Schema({
		sku: new Types.UInt32({ default: -1 }),
		name: new Types.String({ default: '0' })
	})

	type IArticleStats = {
		sku: number,
		name: string
	}

	const ArticleStatsModel = model<IArticleStats>(articleStatsSchema, 'prod', 'big_article_stats')

	console.log(ArticleStatsModel.$getCreateQuery())

	console.log(ArticleStatsModel.$createInsertQuery([{
		sku: Infinity,
		name: 'hello'
	}]))
// */

export * from './src/types'
export * from './src/model'
export * from './src/schema'