import { DateType } from "./interface";

export class DateTime extends DateType {
	public getType () {
		return 'DateTime'
	}

	public validate (value: string) {
		return true
	}
}

export class Date extends DateType {
	public getType () {
		return 'Date'
	}

	public validate (value: string) {
		return true
	}
}