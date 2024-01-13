import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './club.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EventsComponent } from './components/events/events.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminEventDetailComponent } from './components/admin-event-detail/admin-event-detail.component';

@NgModule({
  declarations: [
    ClubComponent,
    AddEventComponent,
    EditEventComponent,
    EventsComponent,
    DashboardComponent,
    MembersComponent,
    AdminEventDetailComponent,
  ],
  imports: [CommonModule, ClubRoutingModule, ReactiveFormsModule, SharedModule],
})
export class ClubModule {}
