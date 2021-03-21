import React from "react"; 

export default function WeatherSunrise(props){
let sunriseTimestamp = props.sunrise * 1000 + props.timezone * 1000; 
let sunriseDate = new Date(sunriseTimestamp);
let sunriseHours = sunriseDate.getHours(); 
if (sunriseHours < 10){
    sunriseHours = `0${sunriseHours}`; 
}
let sunriseMinutes = sunriseDate.getMinutes(); 
if (sunriseMinutes < 10){
    sunriseMinutes = `0${sunriseMinutes}`; 
}
return (
    <div className="WeatherSunrise"> 
     <strong>{sunriseHours}:{sunriseMinutes}</strong>
    </div>
);
}