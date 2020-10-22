$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

let appId = "3cabd239edc7a1a02e8bbcaf7de0b2ef";
let units = "imperial"; 
let searchMethod = "q";

function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appid=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer){
    switch (resultFromServer.weather[0].main){
        case 'Clear':
            document.body.style.backgroundImage = 'url("clear.jpeg")';
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpeg")';
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("rain.jpeg")';
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("stormy.webp")';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("snow.jpeg")';
            break;

        default:
            break; 
    }

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed'); 
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
}

document.getElementById("searchBtn").addEventListener("click", () => {
    let searchTerm = document.getElementById("searchInput").value;
    if(searchTerm)
        searchWeather(searchTerm);
})



{/* <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script><script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '5780993',appid: '3cabd239edc7a1a02e8bbcaf7de0b2ef',units: 'imperial',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script> */}







































// // Assign variables 
// const weatherBtn = document.querySelector("#weatherBtn");
// const cityTxt = document.querySelector("#cityTxt");
// const weatherResult = document.querySelector("#result");


// // need an event listener on click
// weatherBtn.onclick = function(){
//     const city = cityTxt.value;
//     const api = "api.openweathermap.org/data/2.5/weather?q=${city%20name},{state%20code}&appid=3cabd239edc7a1a02e8bbcaf7de0b2ef";
//     // console.log(api);
//     fetch(api).then(response => {
//         response.json().then(json => {
//             let data = json;
//             // console.log(data);
//             let output = formatResponse(data);
//             weatherResult.innerHTML = output;
//         });
//     });
// }

// function kelvinToFahrenheit(kTemp){
//     const fTemp = kTemp * (9/5) - 459.67;
//     return fTemp;
// }

// function msToMPH(ms){
//     return ms *2.237;
// }

// function formatResponse(data){
//     let conditions = ""
//     if(data.weather.length > 1){
//         for(var i=0; i < data.weather.length; i++){
//             conditions += data.weather[i].main;
//             if (i != (data.weather.length -1)) {
//                 conditions += "and";
//             }
//         }
//     } else {conditions += data.weather[0].main;
//     }
//     let out = `<p><strong>Current COndirions for ${data.name}<strong></p>
//     <p><strong>Temperature:</strong> ${Math.round(kelvinToFahrenheit(data.main.temp))}F<br>
//     <p><strong>Humidity:</strong> ${data.main.humidity}%<br>
//     <p><strong>Wind Speed:</strong> ${data.wind.deg} degrees at ${Math.round(msToMPH(data.wind.speed))}MPH<br>
//     <p>${conditions}</p>`
//     return(out);
// }


// // store city names in local storage
// // need to display 5 day forcast of current selection 
