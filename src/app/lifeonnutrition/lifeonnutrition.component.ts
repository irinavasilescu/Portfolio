import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-lifeonnutrition',
	templateUrl: './lifeonnutrition.component.html',
	styleUrls: ['./lifeonnutrition.component.css', './../app.component.scss']
})
export class LifeonnutritionComponent implements OnInit {

	displayURL: any;

	constructor(
		private sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		this.displayURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/l6iHC6ds5hg');
	}

}
