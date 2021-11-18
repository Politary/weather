import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Container } from './App.styles';
import { WeatherList } from './components/WeatherList/WeatherList';
import { PersonInput } from './components/PersonInput/PersonInput';

function App() {
    return (
        <div>
            <Container>
                <SearchBar />
                <PersonInput />
                <WeatherList />
            </Container>
        </div>
    );
}

export default App;
