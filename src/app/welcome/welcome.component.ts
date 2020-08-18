import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	constructor(
		private uiStyleToggleService: UiStyleToggleService
	) { }

	ngOnInit(): void {
	}

	toggleTheme() {
		this.uiStyleToggleService.toggle();
	}
}
