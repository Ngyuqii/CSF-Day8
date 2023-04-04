import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityRepository } from './services/city.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private router: Router, private cityRepo: CityRepository){ }

  //Direct user to home page
  toHome(){
    this.router.navigate(['/']);
  }

  //Direct user to AddcityComponent
  toAddCity(){
    this.router.navigate(['/addcity']);
  }

  //Clear all data from city table in indexedDB
  clearHistory(){
    this.cityRepo.clearCities();
  }

}
