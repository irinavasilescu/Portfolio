import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

const MaterialModules = [
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatChipsModule
];

@NgModule({
	imports: [ MaterialModules ],
	exports: [ MaterialModules ]
})
export class MaterialModule { }
