import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
import WeatherData from './WeatherData';
import './App.css';

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city)

  function handleSubmit(event){
    event.preventDefault(); 
    search();
  }

  function updateCity(event){
    setCity(event.target.value);
  }

  function search(){
    const apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response){
    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    temperature: (response.data.main.temp),
    humidity: (response.data.main.humidity),
    wind: (response.data.wind.speed),
    maxTemp: response.data.main.temp_max,
    minTemp: response.data.main.temp_min,
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  });
}

  if (weatherData.ready) {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Enter city...."
                    className="form-control mb-3"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                  <button className="btn btn-secondary">
                    Current Location
                  </button>
                </div>
              </div>
            </form>
           <WeatherData info={weatherData} />
           </div> 
          </div>  
        </div> 
        <small> 
<p>
<a href="https://github.com/Fionnuala12/weather-app-react">Open-source code</a> by Fionnuala Wilson
</p>
</small>
      </div>      
);
} else {
  search();
  return "Loading...."
  }
}


export default App;
