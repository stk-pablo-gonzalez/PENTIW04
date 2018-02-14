const api_key = '6415d962ffe762edc096a4bfd0c8d168';

class Weather {
    grab(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&APPID=${api_key}`)
            .then(response => response.json());
    }
}

export default Weather;