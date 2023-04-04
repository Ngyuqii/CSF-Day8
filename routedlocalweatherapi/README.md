### Routed Weather API + Local Storage on Browser
- Home page display a list of predetermined countires and cities.
- A button brings user to a page to add their preferred country, city and optional image URL. Submitting the form adds city to the list on the home page. The country and city input is saved in browser local storage.
- Clicking on any city in the list directs the user to /weather/city and shows specified weather information for the city. Display:
1. City
2. Weather description >>>> "weather": [{"description": "broken clouds"}]
3. Weather Icon >>>> "weather": [{"icon": "04n"}]
4. Temperature >>>> "main": {"temp": 26.81},
5. Pressure >>>> "main": {"pressure": 1010}
6. Humidity >>>> "main": {"humidity": 83}
7. Wind Speed >>>> "wind": {"speed": 2.06} 
- A button brings user back to home page.
- A button clears the local storage.

### Required data
```
{
  "weather": [
    {
      "description": "broken clouds",
      "icon": "04n"
    }
  ],
  "main": {
    "temp": 26.81,
    "pressure": 1010,
    "humidity": 83
  },
  "wind": {
    "speed": 2.06
  }
}
```

### API Call and Response
URL = https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid={API_Key}
```
{
  "coord": {
    "lon": 103.8501,
    "lat": 1.2897
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 26.81,
    "feels_like": 29.58,
    "temp_min": 26.72,
    "temp_max": 27.02,
    "pressure": 1010,
    "humidity": 83
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.06,
    "deg": 340
  },
  "clouds": {
    "all": 75
  },
  "dt": 1680282048,
  "sys": {
    "type": 2,
    "id": 265581,
    "country": "SG",
    "sunrise": 1680303888,
    "sunset": 1680347534
  },
  "timezone": 28800,
  "id": 1880252,
  "name": "Singapore",
  "cod": 200
}
```