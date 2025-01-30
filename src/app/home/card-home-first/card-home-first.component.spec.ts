import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomeFirstComponent } from './card-home-first.component';

describe('CardHomeComponent', () => {
  let component: CardHomeFirstComponent;
  let fixture: ComponentFixture<CardHomeFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHomeFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHomeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
