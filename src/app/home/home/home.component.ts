import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardHomeFirstComponent } from "../card-home-first/card-home-first.component";
import { CardHomeSecondComponent } from "../card-home-second/card-home-second.component";
import { VisibilityService } from '../../services/visability/visibility.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule ,CardHomeFirstComponent, CardHomeSecondComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  visibility = inject(VisibilityService)
  
  private subscriptions: Subscription[] = [];
  firstFormVisibility?: boolean;
  secondFormVisibility?: boolean

  constructor() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  ngOnInit(): void {
    this.subscriptions.push(
      this.visibility.getCardHomeFirstValue().subscribe(isVisible => {
        this.firstFormVisibility = isVisible;
      })
    );

    
    this.subscriptions.push(
      this.visibility.getCardHomeSecondValue().subscribe(isVisible => {
        this.secondFormVisibility = isVisible;
      })
    );
  }
}
