import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShelvesComponent } from '../shelves/shelves.component';
import { LifeonnutritionComponent } from '../lifeonnutrition/lifeonnutrition.component';

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
		public dialog: MatDialog
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

	openGoodreads() {
		window.open("https://www.goodreads.com/user/show/58575151-irina-vasilescu", '_blank');
	}

	openShelves() {
		this.dialog.open(ShelvesComponent, { width: '850px' });
	}

	openLifeOnNutrition() {
		this.dialog.open(LifeonnutritionComponent, { width: '850px' });
	}
}
