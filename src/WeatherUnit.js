import React from "react";
export default function WeatherUnit (props){

 function showFahrenheit(event){
     event.preventDefault();
     props.setUnit("imperial");
 }

 function showCelsius(event){
     event.preventDefault();
     props.setUnit("metric");

 }

 function fahrenheit (){
   return (props.metric * 9/5) + 32;
 }

 let highC = Math.round(props.data.maxTemp); 
 let lowC = Math.round(props.data.minTemp); 
 let highF = Math.round((highC * 9/5) + 32); 
 let lowF = Math.round((lowC * 9/5) + 32); 


 if(props.unit === 'metric'){
return(
    <div className="WeatherUnit">
    <span className="today-weather-temp">
    {Math.round(props.metric)}
      </span>
      <span className="units">
        °C
      |{" "}
      <a href="/" onClick={showFahrenheit}>
        F°
      </a>
      </span>
      <div className="text-capitalize">
      {props.description}
    </div>
    <i className="fas fa-thermometer-three-quarters"> </i>{" "} <strong> {highC}°C </strong>| <i className="fas fa-thermometer-quarter"></i>{lowC}°C 
  </div>

)
} else {
   return( <div className="WeatherUnit">
    <span className="today-weather-temp">
    {Math.round(fahrenheit())}
      </span>
      <span className="units"> <a href="/" onClick={showCelsius}>
        °C </a>
      |{" "}
        F°
      </span>
      <div className="text-capitalize">
      {props.description}
    </div>
    <strong> {highF}°F </strong> {lowF}°F
  </div>
   )
}
}