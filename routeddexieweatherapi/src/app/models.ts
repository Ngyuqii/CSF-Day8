export interface City {
  country: string;
  city: string;
}

export const CITIES : City [] = [
  { country: 'Singapore', city: 'Singapore'},
  { country: 'China', city: 'Beijing'},
  { country: 'India', city: 'New Delhi'},
  { country: 'Malaysia', city: 'Kuala Lumpur'},
  { country: 'Thailand', city: 'Bangkok'}, 
  { country: 'United Kingdom', city: 'London'}
]

export class Weather{
  constructor(
    public cityName: string,
    public description: string,
    public icon: string,
    public temp: number,
    public pressure: number,
    public humidity: number,
    public windSpeed: number){
  };
}