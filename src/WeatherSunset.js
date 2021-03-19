import React from "react"; 

export default function WeatherSunset(props){
let sunsetTimestamp = props.sunset * 1000 + props.timezone * 1000; 
let sunsetDate = new Date(sunsetTimestamp);
let sunsetHours = sunsetDate.getHours(); 
if (sunsetHours < 10){
    sunsetHours = `0${sunsetHours}`; 
}
let sunsetMinutes = sunsetDate.getMinutes(); 
if (sunsetMinutes < 10){
    sunsetMinutes = `0${sunsetMinutes}`; 
}
return (
    <div className="WeatherSunrise"> 
    <i class="far fa-sun"></i> {sunsetHours}:{sunsetMinutes}
    </div>
);
}