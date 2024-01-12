import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewEventComponent } from './components/modals/view-event/view-event.component';
import { ModalLayoutComponent } from './components/modals/modal-layout/modal-layout.component';
import { ParticipateEventComponent } from './components/modals/participate-event/participate-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ConfirmParticipationComponent } from './components/confirm-participation/confirm-participation.component';

const COMPONENTS = [
  HeaderComponent,
  SwitchThemeComponent,
  SearchBarComponent,
  EventCardComponent,
  FooterComponent,
  ViewEventComponent,
  ModalLayoutComponent,
  ParticipateEventComponent,
  LoadingComponent,
  ConfirmParticipationComponent,
];
const MODULES = [CommonModule, ReactiveFormsModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
