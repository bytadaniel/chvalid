import { MapType } from "./interface";

export class Map extends MapType {
	public getType () {
		return 'Map'
	}

	public validate (value: any) {
		return true
	}
}
