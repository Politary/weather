import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        location: {
            name: '',
            country: '',
            unixDate: '',
            weatherIcon: null,
            currentTemp: '',
            feelsLike: '',
            weather: '',
            windSpeed: '',
            humidity: null,
            isLoaded: false,
        },
        state: 'idle',
        errorCode: null,
    },
    reducers: {
        getWeatherFetch: (state) => {
            state.state = 'loading';
        },
        getWeatherSuccess: (state, action) => {
            state.location = action.payload;
            state.state = 'loaded';
            state.errorCode = null;
        },
        getWeatherFailure: (state, action) => {
            console.log(action.payload.response.status);
            state.state = 'error';
            state.errorCode = action.payload.response.status;
            state.location = {
                name: '',
                county: '',
                unixDate: '',
                weatherIcon: null,
                currentTemp: '',
                feelsLike: '',
                weather: '',
                windSpeed: '',
                humidity: null,
                isLoaded: false,
            };
        },
    },
});

export default weatherSlice.reducer;
export const { getWeatherFetch, getWeatherSuccess, getWeatherFailure } =
    weatherSlice.actions;
