import React from "react"; 
import WeatherSunrise from "./WeatherSunrise";
import WeatherSunset from "./WeatherSunset";

export default function WeatherExtraInfo(props){
     
    return (
 <div className="WeaterExtraInfo">
    <div className="container grid">
    <div className="row row-cols-3">
      <div className="col box">
        {Math.round(props.data.humidity)}%
        <div>
          <i className="fas fa-tint"></i> Humidity
        </div>
      </div>
      <div className="col box">
        {Math.round(props.data.wind)}kmh
        <div>
          <i className="fas fa-wind"></i> Wind
        </div>
      </div>
      <div className="col box">
        {Math.round(props.data.maxTemp)}°C
        <div>
          <i className="fas fa-thermometer-three-quarters"></i>{" "}
          Max Temp
        </div>
      </div>
      <div className="col box">
        {Math.round(props.data.minTemp)}°C
        <div>
          <i className="fas fa-thermometer-quarter"></i>{" "}
          Min. Temp
        </div>
        </div>
        <div className="col box">
        <WeatherSunset sunset={props.data.sunset} timezone={props.data.timezone} />
        <div>
          Sunset
        </div>
      </div>
      <div className="col box">
        <WeatherSunrise sunrise={props.data.sunrise} timezone={props.data.timezone} />
        <div>
         Sunrise 
        </div>
      </div>
    </div>
  </div>
  </div> 
 

    )
}