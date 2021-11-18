import React from 'react';
import './App.css';
import { Container } from './App.styles';
import { WeatherList } from './components/WeatherList/WeatherList';

function App() {
    return (
        <div>
            <Container>
                <WeatherList />
            </Container>
        </div>
    );
}

export default App;
