import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
import FormattedDate from './FormattedDate';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
    setWeatherData({
    ready: true,
    city: "Paris",
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    temperature: (response.data.main.temp),
    humidity: (response.data.main.humidity),
    wind: (response.data.wind.speed),
    maxTemp: response.data.main.temp_max,
    minTemp: response.data.main.temp_min,
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  })
};

  if (weatherData.ready) {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Enter city...."
                    className="form-control mb-3"
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
            <h1>{weatherData.city}</h1>
            <h2><FormattedDate date={weatherData.date} /></h2>

            <div className="row">
              <div className="col-6 mt-4">
                <div className="clearfix">
                  <img src={weatherData.img} alt={weatherData.description} className="float-left"/>
                  <div className="float-left">
                  <div className="main-weather">
                    <span className="today-weather-temp">
                  {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="/" className="inactive">
                      F°
                    </a>
                    </span>
                    <div className="text-capitalize">
                      {weatherData.description}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="container grid">
                  <div className="row row-cols-2">
                    <div className="col box">
                      {Math.round(weatherData.humidity)}%
                      <div>
                        <i className="fas fa-tint"></i> Humidity
                      </div>
                    </div>
                    <div className="col box">
                      {Math.round(weatherData.wind)}kmh
                      <div>
                        <i className="fas fa-wind"></i> Wind
                      </div>
                    </div>
                    <div className="col box">
                      {Math.round(weatherData.maxTemp)}°C
                      <div>
                        <i className="fas fa-thermometer-three-quarters"></i>{" "}
                        Max Temp
                      </div>
                    </div>
                    <div className="col box">
                      {Math.round(weatherData.minTemp)}°C
                      <div>
                        <i className="fas fa-thermometer-quarter"></i>{" "}
                        Min. Temp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row weather-forecast">
                  <div class="col-2"> 
                  <h4> Sun </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Mon </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Tues </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Wed </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Thurs </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
                  <div class="col-2"> 
                  <h4> Fri </h4>
                  <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                  <div class="weather-forecast-temperature">
                    <strong> 17°</strong> 15°
                  </div>
                  </div>
          </div>
        </div>
      </div>
      <small> 
    <p>
    <a href="https://github.com/Fionnuala12/weather-app-react">Open-source code</a> by Fionnuala Wilson
    </p>
</small>
    </div>
 </div>
  );

} else {
  const apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3"; 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  return "Loading...."

}
}

export default App;
