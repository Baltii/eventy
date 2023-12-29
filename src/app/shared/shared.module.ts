import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewEventComponent } from './components/modals/view-event/view-event.component';
import { ModalLayoutComponent } from './components/modals/modal-layout/modal-layout.component';

const COMPONENTS = [
  HeaderComponent,
  SwitchThemeComponent,
  SearchBarComponent,
  EventCardComponent,
  FooterComponent,
  ViewEventComponent,
];
const MODULES = [CommonModule];
@NgModule({
  declarations: [...COMPONENTS, ModalLayoutComponent],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
