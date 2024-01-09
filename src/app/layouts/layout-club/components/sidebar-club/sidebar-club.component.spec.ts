import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarClubComponent } from './sidebar-club.component';

describe('SidebarClubComponent', () => {
  let component: SidebarClubComponent;
  let fixture: ComponentFixture<SidebarClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarClubComponent]
    });
    fixture = TestBed.createComponent(SidebarClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
