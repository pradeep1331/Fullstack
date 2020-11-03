
const indWeather = document.getElementById("indWeather");
const bhWeather = document.getElementById("BHWeather");
const jpWeather = document.getElementById("jpWeather");
var country;

indWeather.addEventListener("click",function(){

  country = "india";

  getWeather(country);

});


bhWeather.addEventListener("click",function(){

  country = "bhutan";

  getWeather(country);

});

jpWeather.addEventListener("click",function(){

  country = "japan";

  getWeather(country);

});




let getWeather = function(country){

fetch("https://api.openweathermap.org/data/2.5/weather?q="+country+"&APPID=58e4c55f0ca3c0fab8255d5ae3b38a15")

.then(function(response){

    return response.json();
})
 .then(function (data){
   if(country == "india" ){
    indWeather.innerText = data.weather[0].description;
   }else if(country == "bhutan"){
     
    bhWeather.innerText = data.weather[0].description;
   }else if(country == "japan"){
    jpWeather.innerText = data.weather[0].description;
   }

})
}


