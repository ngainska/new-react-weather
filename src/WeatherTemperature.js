import React from "react";

export default function WeatherTemperature(props){
    console.log(props.passUnits);
    const showFahrenheit=(event) => {
        event.preventDefault();
props.setPassUnits(`fahrenheit`);
    }

const showCelsius=(event) => {
    event.preventDefault();
    props.setPassUnits(`celsius`);
}

function fahrenheit(){
    return (props.celsius * 9/5) + 32;
}   


    if (props.passUnits === `celsius`) {
    return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | {""}<a href="/" onClick={showFahrenheit}>°F</a></span>
         </div>)} else {
             return (<div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="unit"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
         </div>)
         }
         
}

