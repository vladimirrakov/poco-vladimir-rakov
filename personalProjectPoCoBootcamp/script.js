// Fetch the weather data from the API
function fetchWeatherData(cityName, apiKey) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayWeatherData(data))
    .catch((error) => console.log(error));
}

// Display the weather data on the web page
function displayWeatherData(weatherData) {
  const weatherContainer = document.getElementById("weather-data");

  // Extract the desired information from the weatherData object
  const temperature = weatherData.main.temp;
  const weatherConditions = weatherData.weather[0].description;

  // Create HTML elements to display the data
  const temperatureElement = document.createElement("p");
  temperatureElement.textContent = `Temperature: ${temperature}°C`;

  const conditionsElement = document.createElement("p");
  conditionsElement.textContent = `Weather Conditions: ${weatherConditions}`;

  // Append the elements to the weatherContainer
  weatherContainer.appendChild(temperatureElement);
  weatherContainer.appendChild(conditionsElement);
}

// Indicate your actual API key
const apiKey = "8b5328e8873c6f092da6d5d764d5b499";
const cityName = "New York"; // Replace with the desired city name

fetchWeatherData(cityName, apiKey);