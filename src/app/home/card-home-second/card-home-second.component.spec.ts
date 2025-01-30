import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomeSecondComponent } from './card-home-second.component';

describe('CardHomeSecondComponent', () => {
  let component: CardHomeSecondComponent;
  let fixture: ComponentFixture<CardHomeSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHomeSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHomeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
