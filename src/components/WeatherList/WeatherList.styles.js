import styled from 'styled-components/macro';

export const WeatherWrapper = styled.div.attrs((props) => ({
    isLoaded: props.isLoaded,
}))`
    display: ${(props) => (props.isLoaded ? 'flex' : 'none')};
`;
