import { Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { APIComponent } from './components/api/api.component';

export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  {path:'api',component:APIComponent}



];
