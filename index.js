import { weather_api_key } from "./config.js";

const weather_api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error");

async function checkweather(city){
    const data = await fetch(weather_api_url + city + `&appid=${weather_api_key}`)
    .then((response)=>response.json())
    .then((result)=>{
        return result;
    });

    if(data.cod == 404){
        errorMessage.style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        errorMessage.style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});

checkweather("pittsburgh");

