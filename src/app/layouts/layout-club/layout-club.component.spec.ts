import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutClubComponent } from './layout-club.component';

describe('LayoutClubComponent', () => {
  let component: LayoutClubComponent;
  let fixture: ComponentFixture<LayoutClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutClubComponent]
    });
    fixture = TestBed.createComponent(LayoutClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
