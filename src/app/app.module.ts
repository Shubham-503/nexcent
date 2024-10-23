import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ClientSectionComponent } from './components/client-section/client-section.component';
import { CommunitySectionComponent } from './components/community-section/community-section.component';
import { InfoCardSectionComponent } from './components/info-card-section/info-card-section.component';
import { AchievementsSectionComponent } from './components/achievements-section/achievements-section.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomerTestimonialComponent } from './components/customer-testimonial/customer-testimonial.component';
import { MarketingSectionComponent } from './components/marketing-section/marketing-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    ClientSectionComponent,
    CommunitySectionComponent,
    InfoCardSectionComponent,
    AchievementsSectionComponent,
    CustomerCardComponent,
    CustomerTestimonialComponent,
    MarketingSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
