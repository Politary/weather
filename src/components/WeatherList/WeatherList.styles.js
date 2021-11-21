import styled from 'styled-components/macro';

export const WeatherWrapper = styled.div.attrs((props) => ({
    name: props.name,
    isLoading: props.isLoading,
}))`
    display: ${(props) =>
        props.name === '' && !props.isLoading ? 'none' : 'flex'};
    border-radius: 6px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 109px;
        height: 116px;
        margin: 32px;
    }
    span {
        font-weight: 600;
        line-height: 1.5rem;
        color: #9ab0bd;
    }
`;
