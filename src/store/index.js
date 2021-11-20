import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './main/main.reducers';

export const store = configureStore({
    reducer: { weatherReducer },
});
