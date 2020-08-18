import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from './services/ui-style-toggle.service';

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

	toggleTheme() {
		this.uiStyleToggleService.toggle();
	}

	changeLightbulb() {
		this.uiStyleToggleService.theme$.subscribe(resp => {
			this.darkTheme = resp !== 1;
		});
	}
}
