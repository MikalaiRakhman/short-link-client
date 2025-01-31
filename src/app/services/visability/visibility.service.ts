import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private cardHomeFirstVisibility = new BehaviorSubject<boolean>(true);
  private cardHomeSecondVisibility = new BehaviorSubject<boolean>(false);

  getCardHomeFirstValue() {
    return this.cardHomeFirstVisibility.asObservable();
  }

  getCardHomeSecondValue() {
    return this.cardHomeSecondVisibility.asObservable();
  }

  setCardHomeFirstValue(isVisible: boolean) {
    this.cardHomeFirstVisibility.next(isVisible);
  }

  setCardHomeSecondValue(isVisible: boolean) {
    this.cardHomeSecondVisibility.next(isVisible);
  }
}
