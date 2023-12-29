import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  HeaderComponent,
  SwitchThemeComponent,
  SearchBarComponent,
  EventCardComponent,
  FooterComponent,
];
const MODULES = [CommonModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
