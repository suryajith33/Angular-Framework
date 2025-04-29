import { Injectable } from "@angular/core";
import en from "./json/en.json";

export enum Language {
	ENGLISH = "en",
}

export const DefaultLanguage = Language.ENGLISH;

interface JSONData {
	[key: string]: string;
}

@Injectable({
	providedIn: "root",
})
export class I18nService {
	private translations: JSONData = en;

	constructor() {}

	get(key: string): string {
		return this.translations[key] || key;
	}
}
