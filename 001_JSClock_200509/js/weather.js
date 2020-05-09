const API_KEY = "1c24c214c87331e2d54b81b03a6d505f";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".js-weather .weather__text");

function getWeather(coords) {
    fetch(
            `${WEATHER_API}lat=${coords.lat}&lon=${
      coords.lng
    }&appid=${API_KEY}&units=metric`
        )
        .then(response => response.json())
        .then(json => {
            const name = json.name;
            const temperature = json.main.temp;
            weather.innerHTML = `${temperature.toFixed(1)}° @ ${name}`;
        });
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coords = {
        lat,
        lng
    };
    localStorage.setItem("coords", JSON.stringify(coords));
    getWeather(coords);
}

function handleGeoFailure() {
    console.log("no location");
}

function loadWeather() {
    const currentCoords = localStorage.getItem("coords");
    if (currentCoords !== null) {
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords);
        return;
    } else {
        navigator.geolocation.getCurrentPosition(
            handleGeoSuccess,
            handleGeoFailure
        );
    }
}

function init() {
    loadWeather();
}

init();