// establish my variables 
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

var button = document.querySelector('.searchCity');
var inputValue = document.querySelector('.inputValue'); 
var cityName = document.querySelector('.cityName');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uv = document.querySelector('.uv');
var apiKey = "3cabd239edc7a1a02e8bbcaf7de0b2ef";
var units = "imperial"; 
var searchMethod = "q";

// create a searchCity section 
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid='+apiKey) 
    .then(response => response.json())
    .then(data => {
        var cityNameValue = data.name;
        var tempValue = data.main.temp;
        var humidityValue = data.main.humidity;
        var windSpeedValue = data.wind.speed;
        var iconValue = data.weather[0].icon;

        cityName.innerHTML = `City: ${cityNameValue}`;
        temp.innerHTML = `Temperature: ${tempValue} F`;
        humidity.innerHTML = `Humidity: ${humidityValue}%`;
        windSpeed.innerHTML = `Wind Speed: ${windSpeedValue} MPH`;
        
        getUvIndex(data.coord.lat, data.coord.lon);
        getForecast(inputValue.value);
    });
});

// UV Index Call 
function getUvIndex (lat,lon){
    fetch('http://api.openweathermap.org/data/2.5/uvi?lat='+lat+'&lon='+lon+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
       var uvValue = data['value'];
       uv.innerHTML = `UV Index: ${uvValue}`;
// change background color of UV index; if high, low etc. the change to green, red, yellow. 
    });

};
//Create the 5 day forcast --> can I use my widget here?
function getForecast(city){
    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid="+apiKey+"&units=imperial")
    .then(response => response.json())
    .then(data => {
        console.log(data)
     for (i = 0; i < data.list.length; i += 8)
        // create 5 cards to populate the 5 day forcast (temp and humidity, icon and date)no UV index for 5 days)
    
    });
};

// goes into original forecast and 5 days 
//Create image tag - 
// "http://openweathermap.org/img/w/" + icon + ".png" 


//Create local storage list inside of a column container 

// $("#searchBtn").on("click", function(){
//     var value = $(this).siblings(".description").val()
//     var key = $(this).parent().attr("id")
//     localStorage.setItem(key, value)
// });