import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
const [weatherData, setweatherData]=useState({ready:false});
function handleReponse(response){
    setweatherData({
        ready: true,
        temperature: response.data.main.temp,
        name: response.data.name,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
        date: `Saturday 16:00`,
        
    })
    ;
    

}

if (weatherData.ready){
return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Insert a city.." className="form-control" autoFocus="on"/> </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <h1>{weatherData.name}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>

            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                    <img src={weatherData.icon}
                    alt={weatherData.description}
                    className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 3%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} mph</li>
                    </ul>
                </div>

            </div>
        </div>
    )
} else {
const apiKey = "b6a67f67579bcd300971f2f49b91d214";
    let city="Glasgow";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleReponse);

    return "Loading.."
}

}