import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherUnit from "./WeatherUnit";
import WeatherForecast from "./WeatherForecast";
import WeatherExtraInfo from "./WeatherExtraInfo";

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
               <WeatherUnit metric={props.info.temperature} unit={props.unit} setUnit={props.setUnit} description={props.info.description} data={props.info} />
                </div>
              </div>
          </div>
          <div className="col-6">
            <WeatherExtraInfo data={props.info} date={props.info.date} />
         </div> 
        </div>
      <hr />
        <WeatherForecast city={props.info.city} unit={props.unit}/>
        </div>       
    )
}
