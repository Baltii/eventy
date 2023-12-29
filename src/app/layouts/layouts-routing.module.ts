import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutClubComponent } from './layout-club/layout-club.component';

const routes: Routes = [
  { path: '', component: LayoutHomeComponent },
  { path: 'club', component: LayoutClubComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}