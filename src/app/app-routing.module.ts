import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelvesComponent } from './shelves/shelves.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
	{ path: '**', component: PortfolioComponent },
	{ path: 'shelves', component: ShelvesComponent },
	{ path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
