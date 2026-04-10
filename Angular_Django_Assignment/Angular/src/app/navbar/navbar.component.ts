import { Component } from '@angular/core';
import { DatalistingComponent } from '../datalisting/datalisting.component';
import { FormpageComponent } from '../formpage/formpage.component';
import { ActivatedRoute, Router,RouterLink,RouterLinkActive ,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


 
}
