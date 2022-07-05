import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compnents/public/home/home.component';
import { FeteComponent } from './compnents/public/fete/fete.component';
import { NavbarComponent } from './compnents/public/navbar/navbar.component';
import { FooterComponent } from './compnents/public/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeteComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
