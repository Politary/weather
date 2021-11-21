import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './main/main.slice';

export const rootReducer = combineReducers({
    weather: weatherReducer,
});
