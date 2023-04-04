import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CITIES, City } from 'src/app/models';
import { CityRepository } from 'src/app/services/city.repository';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})

export class AddcityComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, 
    private cityRepo : CityRepository) {}

  form!: FormGroup;
  cities: City[] = CITIES;

  //Initialize a FormGroup with validation
  ngOnInit(): void {
    this.form = this.fb.group({
      country: this.fb.control("", [ Validators.required ]),
      city: this.fb.control("", [ Validators.required ])
    });
  }

  //1. Retrieve form values and add them into cities array
  //2. Retrieve form values and add city in citiesDB indexedDB
  //Return user to listcity page
  addNewCity(): void {
    const newCountry = this.form.value.country;
    const newCity = this.form.value.city;
    console.info(`>>>Inputs: ${newCountry} - ${newCity}`);
    //this.cities.push({ "country": newCountry, "city": newCity }); //1
    this.cityRepo.addCity({ "country": newCountry, "city": newCity }); //2
    this.router.navigate(['/']);
  }

}
