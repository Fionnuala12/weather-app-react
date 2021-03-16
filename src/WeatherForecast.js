import React, { useState } from "react"; 
import axios from "axios";
import "./WeatherForecast.css"; 
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function showForecast(response){
        setForecast(response.data);
        setLoaded(true);
        console.log(response.data);
    }

if (loaded && props.city === forecast.city.name){
    return(
        <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]}/>
        <WeatherForecastPreview data={forecast.list[1]}/>
        <WeatherForecastPreview data={forecast.list[2]}/>
        <WeatherForecastPreview data={forecast.list[3]}/>
        <WeatherForecastPreview data={forecast.list[4]}/>
        <WeatherForecastPreview data={forecast.list[5]}/>
        </div>
    );
} else {
const apiKey = "06c9d19d30f0be8b128071a6b5e0aeb3"; 
let url =  `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(url).then(showForecast);
return null;
}
}