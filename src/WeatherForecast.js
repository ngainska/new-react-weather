import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){

function handleResponse(response){
    console.log(response.data);
}

const apiKey = "b6a67f67579bcd300971f2f49b91d214";
let lat= props.coordinates.lat;
let lon=props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return(<div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thur</div> 
                <WeatherIcon code ="01d" size={36}/>
                <div className="WeatherForecast-temp">
                    <span className="WeatherForecast-temp-max">12°</span>
                    <span className="WeatherForecast-temp-min">4°</span>
                </div> 

            </div>

        </div>

    </div>)
}
