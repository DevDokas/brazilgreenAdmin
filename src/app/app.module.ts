import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StrainsPageComponent } from './pages/strains-page/strains-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StrainsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
