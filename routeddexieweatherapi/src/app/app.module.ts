import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListcitiesComponent } from './components/listcities/listcities.component';
import { AddcityComponent } from './components/addcity/addcity.component';
import { DisplayweatherComponent } from './components/displayweather/displayweather.component';
import { WeatherService } from './services/weather.service';
import { CityRepository } from './services/city.repository';

@NgModule({
  declarations: [
    AppComponent,
    ListcitiesComponent,
    AddcityComponent,
    DisplayweatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    CityRepository
],
  bootstrap: [AppComponent]
})
export class AppModule { }
