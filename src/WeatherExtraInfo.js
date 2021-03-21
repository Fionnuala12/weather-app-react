import React from "react"; 
import WeatherSunrise from "./WeatherSunrise";
import WeatherSunset from "./WeatherSunset";

export default function WeatherExtraInfo(props){
     
    return (
 <div className="WeaterExtraInfo">
    <div className="container grid">
    <div className="row row-cols-2">
      <div className="col box">
        <strong>{Math.round(props.data.humidity)}%</strong>
        <div>
          <i className="fas fa-tint"></i> Humidity
        </div>
      </div>
      <div className="col box">
        <strong>{Math.round(props.data.wind)} kmh</strong>
        <div>
          <i className="fas fa-wind"></i> Wind
        </div>
      </div>
       
      <div className="col box">
        <WeatherSunrise sunrise={props.data.sunrise} timezone={props.data.timezone} />
        <div>
        <i class="far fa-sun"></i> Sunrise 
        </div>
      </div>
      <div className="col box">
        <WeatherSunset sunset={props.data.sunset} timezone={props.data.timezone} />
        <div>
        <i class="fas fa-sun"></i> Sunset
        </div>
      </div>
    </div>
  </div>
  </div> 
 

    )
}