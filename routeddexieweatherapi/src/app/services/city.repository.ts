import { Injectable } from '@angular/core';
import Dexie from "dexie";
import { City } from '../models';

@Injectable()
export class CityRepository extends Dexie {

  city!: Dexie.Table<City, string>;

  constructor(){
    super('citiesdb');
    this.version(1).stores({
      city: 'city'
    })
    this.city = this.table('city');
  }

  //Method to add data into city collection in indexedDB
  addCity(city: City): Promise<string> {
    return this.city.add(city);
  }

  //Method to get return the collection of cities from indexedBD
  async getAllCities() : Promise<City[]>{
    const cities  = await this.city.orderBy('city').toArray();
    return cities;
  }

  //Method to clear the city table from indexedDb
  async clearCities(): Promise<void> {
    await this.city.clear();
    console.log('History cleared!');
  }

}
