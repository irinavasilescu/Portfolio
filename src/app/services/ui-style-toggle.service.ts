import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { StorageService } from "./storage.service";

export enum ThemeMode {
	DARK, LIGHT
}

@Injectable()
export class UiStyleToggleService {

	public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);
	private readonly THEME_KEY = 'THEME';
	private readonly DARK_THEME_VALUE = 'DARK';
	private readonly LIGHT_THEME_VALUE = 'LIGHT';
	private readonly DARK_THEME_CLASS_NAME = 'theme-dark';
	private darkThemeSelected = false;

	constructor(private storage: StorageService) {}

	public setThemeOnStart() {
		this.setLightTheme();
		setTimeout(() => {
			document.body.classList.add('animate-colors-transition');
		}, 500);
	}

	public toggle() {
		if (this.darkThemeSelected) {
			this.setLightTheme();
		} else {
			this.setDarkTheme();
		}
	}

	private setLightTheme() {
		console.log('LIGHT THEME');
		document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
		this.darkThemeSelected = false;
		this.theme$.next(ThemeMode.LIGHT);
	}

	private setDarkTheme() {
		console.log('DARK THEME');
		document.body.classList.add(this.DARK_THEME_CLASS_NAME);
		this.darkThemeSelected = true;
		this.theme$.next(ThemeMode.DARK);
	}
}