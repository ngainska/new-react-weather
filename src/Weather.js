import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Insert a city.." className="form-control" /> </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
            </form>
            <h1>Glasgow</h1>
            <ul>
                <li>Saturday 16:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Mostly Cloudy">
                    </img>
                    6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 3%</li>
                        <li>Humidity: 79%</li>
                        <li>Wind: 4 mph</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}