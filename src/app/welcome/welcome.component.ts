import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
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

	toggleTheme() {
		this.uiStyleToggleService.toggle();
	}

	changeLightbulb() {
		this.uiStyleToggleService.theme$.subscribe(resp => {
			this.darkTheme = resp !== 1;
			this.lightbulb = resp === 1 ? './../../assets/bulb_light.png' : './../../assets/bulb_dark.png';
		});
	}
}
