import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../app/material/material.module';
import { ShelvesComponent } from './shelves/shelves.component';
import { UiStyleToggleService } from "./services/ui-style-toggle.service";
import { StorageService } from "./services/storage.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';

export function themeFactory(themeService: UiStyleToggleService) {
	return () => themeService.setThemeOnStart();
}

@NgModule({
	declarations: [
		AppComponent,
		ShelvesComponent,
		PortfolioComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgbModule,
		MaterialModule,
		FontAwesomeModule
	],
	providers: [
		UiStyleToggleService,
		StorageService,
		{provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
