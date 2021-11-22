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
        },
        isLoaded: false,
        isError: false,
    },
    reducers: {
        getWeatherFetch: (state) => {
            state.isLoading = true;
        },
        getWeatherSuccess: (state, action) => {
            state.location = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        getWeatherFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log(action.payload);
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
