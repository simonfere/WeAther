let hoy = new Date();

var today = hoy;
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
today = dd + '/' + mm;
var date1 = document.getElementById("date1");
date1.innerHTML = today;

var tomorrow = new Date();
tomorrow.setDate(hoy.getDate()+1);
var ddt = String(tomorrow.getDate()).padStart(2, '0');
var mmt = String(tomorrow.getMonth() + 1).padStart(2, '0'); // January is 0!
tomorrow = ddt + '/' + mmt;
var date2 = document.getElementById("date2");
date2.innerHTML = tomorrow;

var day3 = new Date();
day3.setDate(hoy.getDate()+2);
var dd3 = String(day3.getDate()).padStart(2, '0');
var mm3 = String(day3.getMonth() + 1).padStart(2, '0'); // January is 0!
day3 = dd3 + '/' + mm3;
var date3 = document.getElementById("date3");
date3.innerHTML = day3;

var day4 = new Date();
day4.setDate(hoy.getDate()+3);
var dd4 = String(day4.getDate()).padStart(2, '0');
var mm4 = String(day4.getMonth() + 1).padStart(2, '0'); // January is 0!
day4 = dd4 + '/' + mm4;
var date4 = document.getElementById("date4");
date4.innerHTML = day4;

var day5 = new Date();
day5.setDate(hoy.getDate()+4);
var dd5 = String(day5.getDate()).padStart(2, '0');
var mm5 = String(day5.getMonth() + 1).padStart(2, '0'); // January is 0!
day5 = dd5 + '/' + mm5;
var date5 = document.getElementById("date5");
date5.innerHTML = day5;








var day5;



function conversorKC (temp) {
    temp = temp - 273.15;
}