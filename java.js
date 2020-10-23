// establish my variables 
// $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var button = document.querySelector('.searchCity');
var inputValue = document.querySelector('.inputValue'); 
var cityName = document.querySelector('.cityName');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var apiKey = "3cabd239edc7a1a02e8bbcaf7de0b2ef";
var units = "imperial"; 
var searchMethod = "q";

// create a searchCity section 
// button, input field, local storage list inside of a column container
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apiKey) 
    .then(response => response.json())
    .then(data => {
        var cityNameValue = data['name'];
        var tempValue = data['main']['temp'];
        var humidityValue = data['main']['humidity'];
        var windSpeedValue = data ['wind']['speed'];

        cityName.innerHTML = cityNameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        windSpeed.innerHTML = windSpeedValue;
    })
});    


