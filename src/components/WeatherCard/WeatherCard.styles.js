import styled from 'styled-components/macro';

export const StyledWeatherCard = styled.div`
    display: flex;
    background-color: lightgray;
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

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 200px;
    height: 200px;
    padding: 0 1rem;
`;
