import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherData(props) {
    return(
        <div className="WeatherData">
       <h1>{props.info.city}</h1>
        <h2><FormattedDate date={props.info.date} /></h2>
        <div className="row">
          <div className="col-6 mt-4">
            <div className="clearfix"> <div className="float-left">
                <WeatherIcon code={props.info.icon} alt={props.info.description}/>
                </div>
              <div className="main-weather">
                <span className="today-weather-temp">
              {Math.round(props.info.temperature)}
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
                  {props.info.description}
                </div>
                </div>
              </div>
          </div>
          <div className="col-6">
            <div className="container grid">
              <div className="row row-cols-2">
                <div className="col box">
                  {Math.round(props.info.humidity)}%
                  <div>
                    <i className="fas fa-tint"></i> Humidity
                  </div>
                </div>
                <div className="col box">
                  {Math.round(props.info.wind)}kmh
                  <div>
                    <i className="fas fa-wind"></i> Wind
                  </div>
                </div>
                <div className="col box">
                  {Math.round(props.info.maxTemp)}°C
                  <div>
                    <i className="fas fa-thermometer-three-quarters"></i>{" "}
                    Max Temp
                  </div>
                </div>
                <div className="col box">
                  {Math.round(props.info.minTemp)}°C
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
    )
}
