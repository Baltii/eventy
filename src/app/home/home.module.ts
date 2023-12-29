import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { UpcomingEventsSectionComponent } from './components/upcoming-events-section/upcoming-events-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, UpcomingEventsSectionComponent, TestimonialSectionComponent, ContactSectionComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
