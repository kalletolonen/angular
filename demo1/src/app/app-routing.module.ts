import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'hero/:id', component: HeroDetailComponent },

]; //When a request with the path 'heroes' is called, HeroesComponent is rendered

@NgModule({
  imports: [RouterModule.forRoot(routes)], //configures the routermodule for the path that's listed earlier in the array
  exports: [RouterModule] //Exports the routermodule to the whole application
})
export class AppRoutingModule { }