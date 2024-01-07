

const apiKey = "6d0ba5c817fd05f935e5d34b54c2e23b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".inputT input");
const searchBtn = document.querySelector(".inputT i");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " KMPH";

  weatherIcon.className = "weather-icon";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.classList.add("Clouds");
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.classList.add("Clear");
  } else if (data.weather[0].main == "Rainy") {
    weatherIcon.classList.add("Rainy");
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.classList.add("Snow");
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.classList.add("Drizzle");
  }

  document.querySelector(".weather").style.display = "block";

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    console.log("Please enter a valid city");
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
