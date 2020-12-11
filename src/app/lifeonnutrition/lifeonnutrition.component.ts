import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-lifeonnutrition',
	templateUrl: './lifeonnutrition.component.html',
	styleUrls: ['./lifeonnutrition.component.css', './../app.component.scss']
})
export class LifeonnutritionComponent implements OnInit {

	displayURL: any;

	constructor(
		public dialogRef: MatDialogRef<any>,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		this.displayURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zX_485BkZls');
	}

	closeDialog() {
		this.dialogRef.close();
	}
}
