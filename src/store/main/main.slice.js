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
            status: 'idle',
            errorCode: null,
        },
        autocompleteList: {
            status: '',
            cities: [],
        },
    },
    reducers: {
        getAutoCompleteListFetch: (state) => {
            state.autocompleteList.status = 'loading';
        },
        getAutoCompleteListSuccess: (state, action) => {
            state.autocompleteList.status = 'loaded';
            console.log(action.payload);
            state.autocompleteList.cities = action.payload;
        },
        getAutoCompleteListFailure: (state, action) => {
            state.autocompleteList.status = 'error';
            console.log(action.payload);
        },
        clearAutoCompleteList: (state) => {
            state.autocompleteList.cities = [];
        },
        getWeatherFetch: (state) => {
            state.location.status = 'loading';
        },
        getWeatherSuccess: (state, action) => {
            state.location = action.payload;
            state.location.status = 'loaded';
            state.location.errorCode = null;
        },
        getWeatherFailure: (state, action) => {
            console.log(action.payload.response.status);
            state.location = {
                name: '',
                country: '',
                unixDate: '',
                weatherIcon: null,
                currentTemp: '',
                feelsLike: '',
                weather: '',
                windSpeed: '',
                humidity: null,
                status: 'error',
                errorCode: action.payload.response.status,
            };
        },
    },
});

export default weatherSlice.reducer;
export const {
    getAutoCompleteListFetch,
    getAutoCompleteListSuccess,
    getAutoCompleteListFailure,
    clearAutoCompleteList,
    getWeatherFetch,
    getWeatherSuccess,
    getWeatherFailure,
} = weatherSlice.actions;
