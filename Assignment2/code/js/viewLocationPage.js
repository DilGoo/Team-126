// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.

var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (locationIndex !== null)
{
    var locationNames = [ "Location A", "Location B" ];
    // If a location name was specified, use it for header bar title.
    document.getElementById("headerBarTitle").textContent = locationNames[locationIndex];
}

var dateRef = document.getElementById('date');

var currentDate = new Date();
currentDate = currentDate.forecastDateString();

var weatherData;

LocationWeatherCache.getWeatherAtIndexForDate(locationIndex, currentDate, populateWeatherData);

var populateWeatherData = function(index, weatherObj)
{
    weatherData = weatherObj;
}