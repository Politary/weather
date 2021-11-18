import styled from 'styled-components/macro';

export const StyledWeatherCard = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    background-color: lightgray;
    justify-content: flex-start;
`;

export const WeatherItem = styled.div`
    display: flex;
    img {
        height: 50px;
        width: 50px;
    }
`;

export const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
