import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'shelves',
	templateUrl: './shelves.component.html',
	styleUrls: ['./shelves.component.scss', './../app.component.scss']
})
export class ShelvesComponent implements OnInit {

	displayURL: any;

	constructor(
		private sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		this.displayURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/XzySnWsAhWU');
	}
}
