import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

export enum ThemeMode {
	DARK, LIGHT
}

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

	isDarkTheme() {
		return this.uiStyleToggleService.theme$.value === ThemeMode.DARK;
	}
	changeLightbulb() {
		this.uiStyleToggleService.theme$.subscribe(resp => {
			this.darkTheme = resp !== 1;
		});
	}
}
