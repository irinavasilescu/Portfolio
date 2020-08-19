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

	toggleTheme() {
		this.uiStyleToggleService.toggle();
	}

	openLinkedin() {
		window.open("https://www.linkedin.com/in/irina-alexandra-vasilescu-a40176192/", '_blank');
	}

	openGithub() {
		window.open("https://github.com/irinavasilescu", '_blank');
	}
}
