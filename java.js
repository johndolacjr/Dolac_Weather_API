// establish my variables 
var button = document.querySelector('.searchCity');
var inputValue = document.querySelector('.inputValue'); 
var cityName = document.querySelector('.cityName');
var todayIcon = document.querySelector('.today-icon');
var tomorrowIcon = document.querySelector('.tomorrow-icon')
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uv = document.querySelector('.uv');
var apiKey = "3cabd239edc7a1a02e8bbcaf7de0b2ef";
var units = "imperial"; 
var searchMethod = "q";
var citiesArray = []
var cityStorage = document.querySelector('.cities-list');

// create a searchCity section 
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid='+apiKey) 
    .then(response => response.json())
    .then(data => {
        var currentDate = new Date(data.dt*1000);
        var day = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();
        var cityNameValue = data.name + " (" + month + "/" + day + "/" + year +") ";
        var tempValue = data.main.temp;
        var humidityValue = data.main.humidity;
        var windSpeedValue = data.wind.speed;
        var iconValue = data.weather[0].icon;
       

        cityName.innerHTML = `${cityNameValue}`;
        temp.innerHTML = `Temperature: ${tempValue} F`;
        humidity.innerHTML = `Humidity: ${humidityValue}%`;
        windSpeed.innerHTML = `Wind Speed: ${windSpeedValue} MPH`;
        

        getUvIndex(data.coord.lat, data.coord.lon);
        getForecast(inputValue.value);


        var iconImg = "https://openweathermap.org/img/wn/" + iconValue + ".png";
        todayIcon.setAttribute("src", iconImg);
        tomorrowIcon.setAttribute("src", iconImg);
        

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
//Create the 5 day forcast
function getForecast(city){
    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial")
    .then(response => response.json())
    .then(data => {
        console.log(data);
     for (i = 0; i < data.list.length; i += 8) {
        
     };
        // create 5 cards to populate the 5 day forcast (temp and humidity, icon and date)no UV index for 5 days)
    
    });
};


//Create local storage list inside of a column container 

function localStorage(){
    $("#searchBtn").on("click", function(){
        var textareaElement = $(".inputValue").val();
        var key = JSON.parse(localStorage.getItem("citiesArray"))
        citiesArray.push(textareaElement);
        localStorage.setItem(key, JSON.stringify(citiesArray));
    });
}



//     citiesArray.push(value)
//     console.log(citiesArray)
//     localStorage.setItem(key, JSON.stringify(citiesArray))
//     document.getElementById('citiesArrayList').value = localStorage.getItem(citiesArray)
// });



// var citiesList = localStorage.getItem("Cities")
