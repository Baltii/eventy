import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutClubComponent } from './layout-club/layout-club.component';
import { SharedModule } from '../shared/shared.module';
import { EventPageDetailComponent } from './components/event-page-detail/event-page-detail.component';
import { SidebarClubComponent } from './layout-club/components/sidebar-club/sidebar-club.component';
import { HeaderClubComponent } from './layout-club/components/header-club/header-club.component';

@NgModule({
  declarations: [LayoutHomeComponent, LayoutClubComponent, EventPageDetailComponent, SidebarClubComponent, HeaderClubComponent],
  imports: [CommonModule, LayoutsRoutingModule, SharedModule],
})
export class LayoutsModule {}
