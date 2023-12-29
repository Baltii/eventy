import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllEventsRoutingModule } from './all-events-routing.module';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { AllEventsComponent } from './all-events.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FilterSectionComponent, AllEventsComponent],
  imports: [CommonModule, AllEventsRoutingModule, SharedModule],
})
export class AllEventsModule {}
