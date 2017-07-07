import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }