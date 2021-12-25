import axios from 'axios';

export const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const autocompleteApi = axios.create({
    baseURL: 'https://autocomplete.travelpayouts.com',
});
