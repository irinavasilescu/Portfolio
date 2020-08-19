import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../app/material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { UiStyleToggleService } from "./services/ui-style-toggle.service";
import { StorageService } from "./services/storage.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

export function themeFactory(themeService: UiStyleToggleService) {
	return () => themeService.setThemeOnStart();
}

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgbModule,
		MaterialModule,
		FontAwesomeModule,
		ChartsModule
	],
	providers: [
		UiStyleToggleService,
		StorageService,
		{provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
