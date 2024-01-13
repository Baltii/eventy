import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { authGuard } from '../shared/guards/auth.guard';
import { AdminEventDetailComponent } from './components/admin-event-detail/admin-event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClubComponent,
    canActivate: [authGuard],
    children: [
      { path: 'events', component: EventsComponent },
      { path: 'events/add', component: AddEventComponent },
      { path: 'events/:id', component: AdminEventDetailComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'members', component: MembersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubRoutingModule {}
