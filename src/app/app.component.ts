import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from './services/ui-style-toggle.service';

export enum ThemeMode {
	DARK, LIGHT
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	darkTheme: boolean;

	constructor(
		private uiStyleToggleService: UiStyleToggleService
	) { }

	title = 'My Portfolio';
	skills = ['PHP', 'JavaScript', 'Angular', 'Angular Material', 'HTML', 'Linux', 'CSS', 'Yii', 'AWS', 'Python', 'MySQL', 'TypeScript', 'Java', 'RxJS'];

	ngOnInit() {

		let currentDot = 0;
		const dots = document.querySelectorAll(".dot");
		const boxes = document.querySelectorAll(".box");

		const boxesInital = () => {
			boxes.forEach((box, index) => {
				(box as HTMLElement).style.left = `${index * 100}%`
			})
		}
		boxesInital()

		dots.forEach((dot, dotIndex) => {
			dot.addEventListener("click", function() {
				boxes.forEach((box, boxIndex) => {
				let boxLeft = parseInt((box as HTMLElement).style.left)
				if(currentDot < dotIndex) {
					boxLeft = boxLeft - 100
				}
				else if (currentDot > dotIndex) {
					boxLeft = boxLeft + 100
				}
				else if (currentDot === dotIndex) {
					return
				}
				(box as HTMLElement).style.left = `${boxLeft}%`
				});
				dots[currentDot].classList.remove('active')
				dots[dotIndex].classList.add('active')
				currentDot = dotIndex
			});
		});

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
			document.getElementById('message').classList.add('message');
		}, 1300);
		setTimeout(() => {
			document.getElementById('blind5').classList.add('blind');
			document.getElementById('blind5').classList.add('show');
		}, 1800);
	}

	isDarkTheme() {
		return this.uiStyleToggleService.theme$.value ===  ThemeMode.DARK;
	}

	toggleTheme() {
		this.uiStyleToggleService.toggle();
	}

	openLinkedin() {
		window.open("https://www.linkedin.com/in/irina-alexandra-vasilescu-a40176192/", '_blank');
	}

	openGithub() {
		window.open("https://github.com/irinavasilescu", '_blank');
	}
}
