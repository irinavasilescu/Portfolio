import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss', './../app.component.scss']
})
export class WelcomeComponent implements OnInit {

	lightbulb: string;
	darkTheme: boolean; 

	constructor(
		private uiStyleToggleService: UiStyleToggleService
	) { }

	ngOnInit(): void {
		this.changeLightbulb();
	}

	changeLightbulb() {
		this.uiStyleToggleService.theme$.subscribe(resp => {
			this.darkTheme = resp !== 1;
		});
	}
}
