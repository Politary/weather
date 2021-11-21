import { createSlice } from '@reduxjs/toolkit';

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

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherSubmit: (state, action) => {
            return { location: action.payload };
        },
    },
});

export const { weatherSubmit } = weatherSlice.actions;

export default weatherSlice.reducer;
