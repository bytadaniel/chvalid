export abstract class BaseType {
	constructor (public readonly options: {
		default?: any
	} = {}) {}

	public abstract getType(): string
	public abstract validate(value: any): boolean
}

type IntRange = (number|bigint)[]

export abstract class IntType extends BaseType {
	public static range: IntRange

	public abstract validate(value: number): boolean
}

export abstract class FloatType extends BaseType {
	public abstract validate(value: number): boolean
}

export abstract class StringType extends BaseType {
	public abstract validate(value: string): boolean
}

export abstract class DateType extends BaseType {
	public abstract validate(value: string): boolean
}

export abstract class MapType extends BaseType {
	public abstract validate(value: any): boolean
}
