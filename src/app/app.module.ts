import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../app/material/material.module';
import { ShelvesComponent } from './shelves/shelves.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { LifeonnutritionComponent } from './lifeonnutrition/lifeonnutrition.component';

@NgModule({
	declarations: [
		AppComponent,
		ShelvesComponent,
		PortfolioComponent,
		LifeonnutritionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgbModule,
		MaterialModule,
		FontAwesomeModule,
		YouTubePlayerModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
