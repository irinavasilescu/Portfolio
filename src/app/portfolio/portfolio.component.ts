import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

export enum ThemeMode {
	DARK, LIGHT
}

@Component({
	selector: 'portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css', './../app.component.scss']
})
export class PortfolioComponent implements OnInit {

	skills = ['PHP', 'JavaScript', 'Angular', 'Angular Material', 'HTML', 'Linux', 'CSS', 'Yii', 'AWS', 'Python', 'MySQL', 'TypeScript', 'Java', 'RxJS'];

	constructor(
		public uiStyleToggleService: UiStyleToggleService
	) { }

	ngOnInit() {
		document.getElementById('blind1').classList.add('blind');
		document.getElementById('blind5').classList.add('dont-show');
		setTimeout(() => {
			document.getElementById('blind2').classList.add('blind');
		}, 500);
		setTimeout(() => {
			document.getElementById('blind3').classList.add('blind');
		}, 1000);
		setTimeout(() => {
			document.getElementById('blind4').classList.add('blind');
			// document.getElementById('message').classList.add('message');
		}, 1500);
		setTimeout(() => {
			document.getElementById('blind5').classList.add('blind');
			document.getElementById('blind5').classList.add('show');
		}, 2000);
	}

	openLinkedin() {
		window.open("https://www.linkedin.com/in/irina-alexandra-vasilescu-a40176192/", '_blank');
	}

	openGithub() {
		window.open("https://github.com/irinavasilescu", '_blank');
	}
}
