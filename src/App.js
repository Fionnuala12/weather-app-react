import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Loader from "react-loader-spinner";
import axios from "axios";
import WeatherData from './WeatherData';
import './App.css';

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city); 
  const [unit, setUnit] = useState("metric");

  function handleSubmit(event){
    event.preventDefault(); 
    search();
  }

  function updateCity(event){
    setCity(event.target.value);
  }

  function handleLocation(position) {
    let apiKey = `12087b5c6e656cb621cae20a854dfb64`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleLocation);
  }

  function search(){
    const apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
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
    icon: response.data.weather[0].icon,
    sunrise: response.data.sys.sunrise,
    sunset: response.data.sys.sunset, 
    timezone: response.data.timezone
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
                <div className="col-8">
                  <input
                    type="text"
                    placeholder="Enter city...."
                    className="form-control mb-3"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-4">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                  <button className="btn btn-secondary" onClick={currentLocation} type="submit">
                  <i class="fas fa-map-marker-alt"></i>
                  </button>
                </div>
              </div>
            </form>
           <WeatherData info={weatherData} unit={unit} setUnit={setUnit}/>
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
  return (
    <div>
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} 
    />
    </div>
  )
  }
}


export default App;
