import { call, put, takeEvery } from 'redux-saga/effects';
import { weatherApi, autocompleteApi } from '../../core/axios';
import {
    getAutoCompleteListFetch,
    getAutoCompleteListSuccess,
    getAutoCompleteListFailure,
    getWeatherSuccess,
    getWeatherFailure,
    getWeatherFetch,
} from './main.slice';

function* workGetWeatherFetch(action) {
    try {
        const weatherData = yield call(() =>
            weatherApi.get(
                `forecast?lat=${action.payload.lat}&lon=${action.payload.lon}&units=metric&lang=russian&appid=c53bf3e244553ba293bc4ff420dc8478`
            )
        );
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

function* workGetAutoCompleteListFetch(action) {
    try {
        const autocompleteList = yield call(() =>
            autocompleteApi.get(
                `places2?term=${action.payload}&locale=ru&types[]=city`
            )
        );
        yield put(
            getAutoCompleteListSuccess(autocompleteList.data.slice(0, 5))
        );
    } catch (error) {
        yield put(getAutoCompleteListFailure(error));
    }
}

function* weatherSaga() {
    yield takeEvery(getWeatherFetch, workGetWeatherFetch);
    yield takeEvery(getAutoCompleteListFetch, workGetAutoCompleteListFetch);
}

export default weatherSaga;
