let hoy = new Date();

var today = hoy;
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
today = dd + '/' + mm;
var date1 = document.getElementById("date1");
date1.innerHTML = today;

async function checkWeather () {

    const response = await fetch(apiURL + city + '&appid=' + atob(atob(apiKey)));
    data = await response.json();
    console.log(data);

    if (data.cod == 404) {

        alert("This city doesn't exist.")

    }

    var temax = data.main.temp_max - 273.15; 
    var temin = data.main.temp_min - 273.15; 

    temax = Math.round(temax);
    temin = Math.round(temin);

    var temptoday = temax + "º/" + temin + "º";

    var temptodayHTML = document.getElementById("temp1");
    temptodayHTML.innerHTML = temptoday;

    var iconcode = data.weather[0].icon;

    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    document.getElementById("wicon").setAttribute("src", iconurl);

}




let cityForm = document.getElementById("cityForm");

cityForm.addEventListener("submit", function (e) {

    e.preventDefault();
    city = document.getElementById("search").value;
    console.log(city);
    checkWeather();


});


const apiURL = "http://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "T1dSaVkyVmhaRFkwWVdVeU1XSmxaV1JpTW1Vd1lqWTFNamRpWm1aa05ETT0="


var data;

