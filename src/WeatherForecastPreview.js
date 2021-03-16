import React from "react"; 
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {

    function hours() { 
        let date = new Date(props.data.dt*1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function maxTemp(){
        let maxTemp = Math.round(props.data.main.temp_max)
        return `${maxTemp}°C`
    }

    function minTemp(){
    let minTemp = Math.round(props.data.main.temp_min)
    return `${minTemp}°C`
    }

    return (
        <div class="WeatherForecastPreview col-2">
              {hours()}
              <WeatherIcon code={props.data.weather[0].icon} />
                <strong> {maxTemp()} </strong> {minTemp()}
              </div>
    )
}