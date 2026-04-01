import { Component } from '@angular/core';
import { FormattersComponent } from '../formatter/formatter.component';
import { TextDisplayComponent } from '../text-display/text-display.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FormattersComponent,TextDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
