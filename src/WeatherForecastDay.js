import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function maxTemp(){
        if (props.passUnits === `celsius`){
 let temp = Math.round(props.data.temp.max);
        return `${temp}°`;
        }
       else {
           let temp = Math.round((props.data.temp.max * 9/5) + 32);
        return `${temp}°`;
       }

    }
     function minTemp(){
         if (props.passUnits === `celsius`){
 let temp = Math.round(props.data.temp.min);
        return `${temp}°`;
        }
       else {
           let temp = Math.round((props.data.temp.min * 9/5) + 32);
        return `${temp}°`;
       }
      
    }

function day(){
    let date= new Date(props.data.dt * 1000);
    let day= date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    return days[day];
}
    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div> 
                <WeatherIcon code ={props.data.weather[0].icon} size={36}/>
                <div className="WeatherForecast-temp">
                    <span className="WeatherForecast-temp-max">{maxTemp()}</span>
                    <span className="WeatherForecast-temp-min">{minTemp()}</span>
                </div> 
        </div>
    )
}

