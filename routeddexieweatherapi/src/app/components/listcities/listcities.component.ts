import { Component, OnInit } from '@angular/core';
import { CITIES, City } from 'src/app/models';
import { CityRepository } from 'src/app/services/city.repository';

@Component({
  selector: 'app-listcities',
  templateUrl: './listcities.component.html',
  styleUrls: ['./listcities.component.css']
})

export class ListcitiesComponent implements OnInit {

  constructor(private cityRepo: CityRepository){ }

  cities: City[] = CITIES;
  addedCities: City[] = [];
  finalCities: City[] = [];

  //Return the collection of cities from IndexedDB citiesdb
  //Concat the original cities and user input cities 
  //Sort the list in descending order of countries
  async ngOnInit() {
    this.addedCities = await this.cityRepo.getAllCities();
    
    this.finalCities= this.cities.concat(this.addedCities);
    this.finalCities.sort((a,b)=> (a.country > b.country)? 1 : -1);

  }

  //Method to remove a city field from the list
  deleteItem(i: number) {
      this.finalCities.splice(i, 1);
  }

}