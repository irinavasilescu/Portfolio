import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from './services/ui-style-toggle.service';

export enum ThemeMode {
	DARK, LIGHT
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	darkTheme: boolean;

	constructor(
		private uiStyleToggleService: UiStyleToggleService
	) { }

	title = 'My Portfolio';

	isDarkTheme() {
		return this.uiStyleToggleService.theme$.value ===  ThemeMode.DARK;
	}
}
