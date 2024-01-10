import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutClubComponent } from './layout-club/layout-club.component';
import { EventPageDetailComponent } from './components/event-page-detail/event-page-detail.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('../authentification/authentification.module').then(
        (m) => m.AuthentificationModule
      ),
  },
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./components/all-events/all-events.module').then(
            (m) => m.AllEventsModule
          ),
      },
      {
        path: 'event/:id',
        component: EventPageDetailComponent,
      },
    ],
  },
  {
    path: 'club',
    component: LayoutClubComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../club/club.module').then((m) => m.ClubModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
