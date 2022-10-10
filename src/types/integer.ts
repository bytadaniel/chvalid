import { BaseType, IntType } from "./interface"

export class Int8 extends IntType {
	public range = [-128, 127]
	
	public getType () {
		return 'Int8'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class UInt8 extends IntType {
	public range = [0, 255]

	public getType () {
		return 'UInt8'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class Int16 extends IntType {
	public range = [-32768, 32767]

	public getType () {
		return 'Int16'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class UInt16 extends IntType {
	public range = [0, 65535]

	public getType () {
		return 'UInt16'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class Int32 extends IntType {
	public range = [-2147483648, 2147483647]

	public getType () {
		return 'Int32'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class UInt32 extends IntType {
	public range = [0, 4294967295]

	public getType () {
		return 'UInt32'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class Int64 extends IntType {
	public range = [-9223372036854775808n, 9223372036854775807n]

	public getType () {
		return 'Int64'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}

export class UInt64 extends IntType {
	public range = [0, 18446744073709551615n]

	public getType () {
		return 'UInt64'
	}

	public validate(value: number): boolean {
		const inBound = value >= this.range[0] && value <= this.range[1]
		return Number.isFinite(value) && Number.isInteger(value) && !Number.isNaN(value) && inBound
	}
}
