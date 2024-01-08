import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageDetailComponent } from './event-page-detail.component';

describe('EventPageDetailComponent', () => {
  let component: EventPageDetailComponent;
  let fixture: ComponentFixture<EventPageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPageDetailComponent]
    });
    fixture = TestBed.createComponent(EventPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
