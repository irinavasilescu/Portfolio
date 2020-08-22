import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

export enum ThemeMode {
	DARK, LIGHT
}

@Component({
	selector: 'skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css', './../app.component.scss']
})
export class SkillsComponent implements OnInit {

	skills = ['PHP', 'JavaScript', 'Angular', 'Angular Material', 'HTML', 'Linux', 'CSS', 'Yii', 'AWS', 'Python', 'MySQL', 'TypeScript', 'Java', 'RxJS'];

	constructor(
		public uiStyleToggleService: UiStyleToggleService
	) { }

	ngOnInit(): void {
	}

	isDarkTheme() {
		return this.uiStyleToggleService.theme$.value === ThemeMode.DARK;
	}
}
