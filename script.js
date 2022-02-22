$(document).ready(function(){
    //alert("Hello world");
    $("#searchInput").on("keyup",function(e){
console.log(e.target.value);
var cityName=e.target.value;
const APIKey = "c429ba4cf9734f3e3e14d1447ceb4e9b";
$.ajax({
url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`,
}).done(function(weatherdata){
console.log(weatherdata);
//$("#profile").html(weatherdata.weather[0].description);
 $("#profile").html(`
     <div style="
     padding-left: 50px;">
      <div class="row">
         <div class="card" style="width: 18rem;">
   <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}" alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">Weather : ${weatherdata.weather[0].description}</h5>
     <p class="card-text">Temprature at ${cityName} is = ${weatherdata.main.temp} &#8451; and its feels like ${weatherdata.main.feels_like}  &#8451</p>
     <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">know about ${cityName}</a>
   </div>
 </div>
     </div>
     </div>
     `);
});
    });
});