import { SchemaConstructor } from "./interface";

export class Schema<T extends SchemaConstructor = SchemaConstructor> {
	constructor (public properties: T) {}
}