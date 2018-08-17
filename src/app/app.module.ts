import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { FooterComponent } from './components/footer/footer.component';

import { TypingAnimationModule } from 'angular-typing-animation';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
