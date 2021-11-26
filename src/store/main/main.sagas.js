import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getWeatherSuccess, getWeatherFailure } from './main.slice';

function* workGetWeatherFetch(action) {
    try {
        const weatherData = yield call(() =>
            axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&units=metric&lang=russian&appid=c53bf3e244553ba293bc4ff420dc8478`
            )
        );
        console.log(weatherData);
        const formattedWeatherData = {
            name: weatherData.data.city.name,
            country: weatherData.data.city.country,
            unixDate: Date.parse(weatherData.data.list[0].dt_txt),
            weather: weatherData.data.list[0].weather[0].main,
            weatherIcon: weatherData.data.list[0].weather[0].icon,
            currentTemp: weatherData.data.list[0].main.temp,
            feelsLike: weatherData.data.list[0].main.feels_like,
            windSpeed: weatherData.data.list[0].wind.speed,
            humidity: weatherData.data.list[0].main.humidity,
        };
        console.log(formattedWeatherData);
        yield put(getWeatherSuccess(formattedWeatherData));
    } catch (error) {
        yield put(getWeatherFailure(error));
    }
}

function* weatherSaga() {
    yield takeEvery('weather/getWeatherFetch', workGetWeatherFetch);
}

export default weatherSaga;
