import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcitiesComponent } from './components/listcities/listcities.component';
import { AddcityComponent } from './components/addcity/addcity.component';
import { DisplayweatherComponent } from './components/displayweather/displayweather.component';

const routes: Routes = [
  {path:'', component: ListcitiesComponent}, //localhost:4200
  {path:'addcity', component: AddcityComponent}, //localhost:4200/addcity
  {path:'weather/:city', component: DisplayweatherComponent}, //localhost:4200/weather/{city}
  {path: '**', redirectTo: '/', pathMatch:"full"} //redirect to localhost:4200
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
