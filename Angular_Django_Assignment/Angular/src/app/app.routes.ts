import { Routes } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';
import { DatalistingComponent } from './datalisting/datalisting.component';
export const routes: Routes = [
 {path:"home",component:FormpageComponent},
 {path:"" ,redirectTo:"home" ,pathMatch:"full"},
 {path:"datalist",component:DatalistingComponent}

];
