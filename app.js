var weatherData = [
  {
    city: "New York City",
    temperature: "20",
    humidity: "75",
    wind_speed: "15",
  },
  {
    city: "Los Angeles",
    temperature: "25",
    humidity: "60",
    wind_speed: "10",
  },
  {
    city: "London",
    temperature: "15",
    humidity: "80",
    wind_speed: "20",
  },
  {
    city: "Tokyo",
    temperature: "28",
    humidity: "70",
    wind_speed: "5",
  },
  {
    city: "Sydney",
    temperature: "22",
    humidity: "50",
    wind_speed: "25",
  },
  {
    city: "Paris",
    temperature: "18",
    humidity: "65",
    wind_speed: "12",
  },
];

function getCityWeather(cityName) {
  for (let i = 0; i < weatherData.length; i++) {
    if (weatherData[i].city.toLowerCase() === cityName.toLowerCase()) {
      return weatherData[i];
    }
  }

  return null;
}

function showWeatherInfo(cityName) {
  const cityWeather = getCityWeather(cityName);
  if (!cityWeather) {
    document.getElementById("weatherInfo").innerHTML = "City not found";
    return;
  }

  const weatherInfoHTML = `
    <h2>${cityWeather.city}</h2>
    <p>Temperature: ${cityWeather.temperature}°C</p>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${cityWeather.wind_speed} km/h</p>
  `;
  document.getElementById("weatherInfo").innerHTML = weatherInfoHTML;
}

function getWeather() {
  const cityName = document.getElementById("cityName").value;
  showWeatherInfo(cityName);
}
