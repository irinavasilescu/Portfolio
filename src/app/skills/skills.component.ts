import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

export enum ThemeMode {
	LIGHT,
	DARK
}

@Component({
	selector: 'skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	constructor(
		public uiStyleToggleService: UiStyleToggleService
	) { }

	ngOnInit(): void {
	}

	isDarkTheme() {
		return this.uiStyleToggleService.theme$.value === ThemeMode.DARK;
	}

	public donutColors = [
		{
			backgroundColor: [
				'#ced',
				'#fda',
				'#fdd',
			]
		}
	];
	public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData: SingleDataSet = [1, 1, 1];
	public doughnutChartType: ChartType = 'doughnut';
}
