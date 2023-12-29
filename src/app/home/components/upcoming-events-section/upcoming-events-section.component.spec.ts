import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsSectionComponent } from './upcoming-events-section.component';

describe('UpcomingEventsSectionComponent', () => {
  let component: UpcomingEventsSectionComponent;
  let fixture: ComponentFixture<UpcomingEventsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingEventsSectionComponent]
    });
    fixture = TestBed.createComponent(UpcomingEventsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
