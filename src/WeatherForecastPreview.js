import React from "react"; 
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {

    function hours() { 
        let date = new Date(props.data.dt*1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    let highC = Math.round(props.data.main.temp_max); 
    let lowC = Math.round(props.data.main.temp_min); 
    let highF = Math.round((highC * 9/5) + 32); 
    let lowF = Math.round((lowC * 9/5) + 32); 
  
    if (props.unit === "metric") {
        return (
            <div class="WeatherForecastPreview col-2">
                  {hours()}
                  <WeatherIcon code={props.data.weather[0].icon} />
                    <strong> {highC}°C </strong> {lowC}°C
                  </div>
        )
    } else {
        return(
        <div class="WeatherForecastPreview col-2">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
          <strong> {highF}°F </strong> {lowF}°F
        </div>
        )
    }
}