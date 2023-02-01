import { Component, OnInit } from '@angular/core';
import { scrollSnapPolyfill } from 'css-scroll-snap-polyfill';
import { Router } from '@angular/router';

@Component({
	selector: 'portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css', './../app.component.scss']
})
export class PortfolioComponent implements OnInit {

	constructor(
		public router: Router
	) { }

	ngOnInit() {
		document.getElementById('blind1').classList.add('blind');
		setTimeout(() => {
			document.getElementById('blind2').classList.add('blind');
		}, 500);
		setTimeout(() => {
			document.getElementById('blind3').classList.add('blind');
		}, 1000);
		setTimeout(() => {
			document.getElementById('blind4').classList.add('blind');
		}, 1500);

		scrollSnapPolyfill.cssScrollSnapPolyfill();
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

	navigateToShelves() {
		window.open("https://github.com/irinavasilescu/Shelves_Frontend");
	}

	navigateToLifeOnNutrition() {
		window.open("https://lifeonnutrition.com/");
	}

	navigateToGoodDonutWriting() {
		window.open("https://gdwriting.tumblr.com/", '_blank');
	}

	navigateToBubbleTrouble() {
		window.open("https://github.com/irinavasilescu/bubble_trouble", '_blank');
	}

	navigateToBeeHive() {
		window.open("https://irinavasilescu.github.io/Beehive/", "_blank");
	}
}
