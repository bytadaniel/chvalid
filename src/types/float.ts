import { FloatType } from "./interface";

export class Float32 extends FloatType {
	public getType () {
		return 'Float32'
	}

	public validate (value: number) {
		return typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value)
	}
}

export class Float64 extends FloatType {
	public getType () {
		return 'Float64'
	}

	public validate (value: number) {
		return typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value)
	}
}