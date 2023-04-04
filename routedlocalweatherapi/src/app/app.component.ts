import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private router: Router){ }

  //Direct user to home page
  toHome(){
    this.router.navigate(['/']);
  }

  //Direct user to AddcityComponent
  toAddCity(){
    this.router.navigate(['/addcity']);
  }

  //Clear all data from local storage
  clearHistory(){
    localStorage.clear();
  }

}
