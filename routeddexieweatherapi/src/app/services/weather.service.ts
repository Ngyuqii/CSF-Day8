import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const APPID = "API_Key";

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  //Method to make a HTTP GET request to the OpenWeatherMap API
  //https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid={API_Key}
  getWeather(city: string): Promise<any> {
    const params = new HttpParams()
        .set("q", city)
        .set("units", "metric")
        .set("appid", APPID);
    return firstValueFrom(
      this.http.get(WEATHER_URL, { params })
    );
  }

}
