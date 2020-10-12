import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';
import { YouTubePlayer } from '@angular/youtube-player';

export enum ThemeMode {
	DARK, LIGHT
}

@Component({
	selector: 'shelves',
	templateUrl: './shelves.component.html',
	styleUrls: ['./shelves.component.scss', './../app.component.scss']
})
export class ShelvesComponent implements OnInit {

	lightbulb: string;
	darkTheme: boolean; 
	player: any;

	constructor(
		private uiStyleToggleService: UiStyleToggleService
	) { }

	ngOnInit(): void {
		const tag = document.createElement('script');
    	tag.src = "https://www.youtube.com/iframe_api";
		document.body.appendChild(tag);
	}
}
