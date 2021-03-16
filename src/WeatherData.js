import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherUnit from "./WeatherUnit";
import WeatherForecast from "./WeatherForecast";

export default function WeatherData(props) {
    return(
        <div className="WeatherData">
       <h1>{props.info.city}</h1>
        <h2><FormattedDate date={props.info.date} /></h2>
        <div className="row">
          <div className="col-6 mt-4">
            <div className="clearfix"> <div className="float-left">
                <WeatherIcon code={props.info.icon}/>
                </div>
              <div className="main-weather">
               <WeatherUnit celsius={props.info.temperature}/>
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
        <WeatherForecast city={props.info.city}/>
        </div>       
    )
}
