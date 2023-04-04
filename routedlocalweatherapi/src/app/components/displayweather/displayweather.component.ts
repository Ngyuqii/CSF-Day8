import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-displayweather',
  templateUrl: './displayweather.component.html',
  styleUrls: ['./displayweather.component.css']
})

export class DisplayweatherComponent implements OnInit, OnDestroy {

  city = "";
  param$!: Subscription;

  weather = new Weather("","","",0,0,0,0);

  constructor(private weatherSvc: WeatherService, private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    //Read path variable {city}
    this.param$ = this.activatedRoute.params.subscribe(
      params => {
        this.city= params["city"];
        console.log(">>>>PV: ", this.city);
      }
    );

    //Call HTTP get to openweather api and set result into the weather object
    this.weatherSvc.getWeather(this.city)
      .then ( (result) => {
        this.weather= new Weather(
          this.city,
          result.weather[0].description,
          result.weather[0].icon,
          result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.wind.speed
        );
      }).catch((err)=> {
        console.log(err);
        this.router.navigate(['']);
      });
  }

  //Unsubscribe to observable
  ngOnDestroy(): void {
    this.param$.unsubscribe();
  }

}


