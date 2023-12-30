import { weather_api_key } from "./config.js";

const weather_api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pittsburgh"

async function checkweather(){
    const data = await fetch(weather_api_url + `&appid=${weather_api_key}`)
    .then((response)=>response.json())
    .then((result)=>{
        return result;
    });

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}

checkweather();

