import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from './services/ui-style-toggle.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
		private uiStyleToggleService: UiStyleToggleService
	) { }

	title = 'portfolio';
	faCoffee = faCoffee;

	toggleTheme() {
		this.uiStyleToggleService.toggle();
	}
}
