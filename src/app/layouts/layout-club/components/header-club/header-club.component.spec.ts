import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClubComponent } from './header-club.component';

describe('HeaderClubComponent', () => {
  let component: HeaderClubComponent;
  let fixture: ComponentFixture<HeaderClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderClubComponent]
    });
    fixture = TestBed.createComponent(HeaderClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
