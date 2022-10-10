import { StringType } from "./interface";

export class String extends StringType {
	public getType () {
		return 'String'
	}

	public validate(value: string): boolean {
		return typeof value === 'string'
	}
}