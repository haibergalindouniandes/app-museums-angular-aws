import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MuseumModule } from './museum/museum.module';

@NgModule({
  declarations: [
    AppComponent,
      FooterComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MuseumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
