import React from "react";

export default function WeatherTemperature(props, {setSelectedUnits}){
    
    //const [unit, setSelectedUnits] = useState("celsius");
    const showFahrenheit=(unit) => {
setSelectedUnits(`fahrenheit`);
    }

const showCelsius=(unit) => {
    setSelectedUnits(`celsius`);
}

function fahrenheit(){
    return (props.celsius * 9/5) + 32;
}   


    if (setSelectedUnits === `celsius`) {
    return(
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C | {""}<a href="/" onClick={()=>showFahrenheit(`fahrenheit`)}>°F</a></span>
         </div>)} else {
             return (<div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="unit"><a href="/" onClick={()=>showCelsius(`celsius`)}>°C</a> | °F</span>
         </div>)
         }
}
