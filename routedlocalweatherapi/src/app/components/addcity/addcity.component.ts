import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CITIES, City } from 'src/app/models';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})

export class AddcityComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {}

  form!: FormGroup;
  cities: City[] = CITIES;

  //Initialize a FormGroup with validation
  ngOnInit(): void {
    this.form = this.fb.group({
      country: this.fb.control("", [ Validators.required ]),
      city: this.fb.control("", [ Validators.required ])
    });
  }

  //Retrieve form values and add them into cities array
  //Set values in local storage
  //Return user to listcity page
  addNewCity(): void {
    const newCountry = this.form.value.country;
    const newCity = this.form.value.city;
    console.info(`>>>Inputs: ${newCountry} - ${newCity}`);
    this.cities.push({ "country": newCountry, "city": newCity });
    localStorage.setItem(newCountry, newCity);
    this.router.navigate(['/']);
  }

}
