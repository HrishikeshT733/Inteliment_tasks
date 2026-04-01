import { Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { ApiComponent } from './components/api/api.component';

export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  {path:'api',component:ApiComponent}



];
