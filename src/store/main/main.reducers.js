import { WEATHER_SUBMIT } from './main.actions';

const initialState = {
    location: {
        name: '',
        weatherIcon: '',
        currentTemp: '',
        feelsLike: '',
        weather: '',
        windSpeed: '',
        isLoaded: false,
    },
};

const handleWeatherSubmit = (state, action) => {
    console.log(action.payload);
    return { ...state, location: action.payload };
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_SUBMIT:
            return handleWeatherSubmit(state, action);
        default:
            return state;
    }
};
