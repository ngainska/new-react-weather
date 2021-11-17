import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props, {passUnits}){
    let [ready, setReady]=useState(false);
    let [forecast, setForecast] = useState(null);


useEffect(() => {
setReady(false);
}, [props.coordinates]);


function handleResponse(response){
    setForecast(response.data.daily);
    setReady(true);
}


function load(){
     const apiKey = "b6a67f67579bcd300971f2f49b91d214";
    let lat= props.coordinates.lat;
    let lon=props.coordinates.lon;

    if ({passUnits} === `celsius`) {

    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);} else {
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    }
}

if (ready) { 
    return (
    <div className="WeatherForecast">
        <div className="row mt-3">
            {forecast.map(function(dailyForecast,index){
                if (index <5) {
                return(
                <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
            </div>
            );
            } else {return null;}
            })}
            
        </div>
    </div>);
}
 else {
   load();
    
    return null;
   }
}
