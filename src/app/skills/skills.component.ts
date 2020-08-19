import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

export enum ThemeMode {
	DARK, LIGHT
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
}
