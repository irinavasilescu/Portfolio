import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelvesComponent } from './shelves/shelves.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LifeonnutritionComponent } from './lifeonnutrition/lifeonnutrition.component';

const routes: Routes = [
	{ path: '', component: PortfolioComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'shelves', component: ShelvesComponent },
	{ path: 'lifeonnutrition', component: LifeonnutritionComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
