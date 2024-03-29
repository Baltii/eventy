import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmParticipationComponent } from './confirm-participation.component';

describe('ConfirmParticipationComponent', () => {
  let component: ConfirmParticipationComponent;
  let fixture: ComponentFixture<ConfirmParticipationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmParticipationComponent]
    });
    fixture = TestBed.createComponent(ConfirmParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
