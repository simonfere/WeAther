import { OpenWeatherMapAPI as key} from "./private/apikey.js";

let hoy = new Date();

let today = hoy;
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
today = dd + '/' + mm;
const date1 = document.getElementById("date1");
date1.innerHTML = today;

let city;

let data;

async function checkWeather () {

    const response = await fetch(apiURL + city + '&appid=' + key );
    data = await response.json();

    if (data.cod === 404) {

        alert("This city doesn't exist.")

    }

    let temax = data.main.temp_max - 273.15;
    let temin = data.main.temp_min - 273.15;

    temax = Math.round(temax);
    temin = Math.round(temin);

    const temptoday = temax + "º/" + temin + "º";

    const temptodayHTML = document.getElementById("temp1");
    temptodayHTML.innerHTML = temptoday;

    const iconcode = data.weather[0].icon;

    const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    document.getElementById("wicon").setAttribute("src", iconurl);

}


let cityForm = document.getElementById("cityForm");

cityForm.addEventListener("submit", function (e) {

    e.preventDefault();
    city = document.getElementById("search").value;
    checkWeather();


});


const apiURL = "http://api.openweathermap.org/data/2.5/weather?q="



