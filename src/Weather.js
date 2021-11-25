import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){

const [weatherData, setweatherData]=useState({ready:false});
const [city, setCity] = useState(props.defaultCity);
function handleReponse(response){
    setweatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        name: response.data.name,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date(response.data.dt * 1000),
        
    })
    ;
    

}

function search(){
const apiKey = "b6a67f67579bcd300971f2f49b91d214";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleReponse);
}


function handleSubmit(event){
    event.preventDefault();
    search();

}

function updateCity(event){
setCity(event.target.value);
}



const [passUnits, setPassUnits] = useState(`celsius`);

if (weatherData.ready){
return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Insert a city.." className="form-control" autoFocus="on" onChange={updateCity}/> </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
<WeatherInfo data={weatherData} passUnits={passUnits} setPassUnits={setPassUnits}/>
<WeatherForecast coordinates={weatherData.coordinates} passUnits={passUnits}/>

            </div>
        
    );
} else {

search();
    return "Loading..";
}

}