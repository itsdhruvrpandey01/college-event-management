import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for forms
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSection } from './components/about-section/about-section.component';
import { CommitteeFormComponent } from './components/committee-form/committee-form.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SponsorsSectionComponent } from './components/sponsors-section/sponsors-section.component';
import { TimelineSectionComponent } from './components/timeline-section/timeline-section.component';


@NgModule({
  declarations: [
    AppComponent, // Add AppComponent here
    NavbarComponent,
    HeroSectionComponent,
    AboutSection,
    TimelineSectionComponent,
    SponsorsSectionComponent,
    FaqSectionComponent,
    FooterComponent,
    CommitteeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Include FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent] // Ensure AppComponent is bootstrapped
})
export class AppModule { }

