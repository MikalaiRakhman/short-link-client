import { Component } from '@angular/core';
import { CardHomeFirstComponent } from "../card-home-first/card-home-first.component";
import { CardHomeSecondComponent } from "../card-home-second/card-home-second.component";

@Component({
  selector: 'app-home',
  imports: [CardHomeFirstComponent, CardHomeSecondComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
