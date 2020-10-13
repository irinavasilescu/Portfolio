import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lifeonnutrition',
	templateUrl: './lifeonnutrition.component.html',
	styleUrls: ['./lifeonnutrition.component.css', './../app.component.scss']
})
export class LifeonnutritionComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		const tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		document.body.appendChild(tag);
	}

}
