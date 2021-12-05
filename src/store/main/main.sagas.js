import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    getAutoCompleteListFetch,
    getAutoCompleteListSuccess,
    getWeatherSuccess,
    getWeatherFailure,
    getWeatherFetch,
} from './main.slice';

function* workGetWeatherFetch(action) {
    try {
        let weatherData = {};
        if (typeof action.payload === 'string') {
            weatherData = yield call(() =>
                axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&units=metric&lang=russian&appid=c53bf3e244553ba293bc4ff420dc8478`
                )
            );
        } else if (Number.isInteger(action.payload)) {
            weatherData = yield call(() =>
                axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?id=${action.payload}&units=metric&lang=russian&appid=c53bf3e244553ba293bc4ff420dc8478`
                )
            );
        }
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
        yield put(getWeatherSuccess(formattedWeatherData));
    } catch (error) {
        yield put(getWeatherFailure(error));
    }
}

function* workGetAutoCompleteListFetch() {
    yield put(getAutoCompleteListSuccess('success'));
}

function* weatherSaga() {
    yield takeEvery(getWeatherFetch, workGetWeatherFetch);
    yield takeEvery(getAutoCompleteListFetch, workGetAutoCompleteListFetch);
}

// function* autoCompleteSaga() {
//     yield takeEvery(getAutoCompleteListFetch, workGetAutoCompleteListFetch);
// }
export default weatherSaga;
