import styled from 'styled-components/macro';

export const StyledCitiesList = styled.ul`
    position: fixed;
    list-style-type: none;
    padding: 0;
    margin: 0;
    top: ${(props) =>
        props.searchBarPosition.top + props.searchBarPosition.height + 'px'};
    left: ${(props) => props.searchBarPosition.left + 'px'};
    width: ${(props) => props.searchBarPosition.width + 50 + 'px'};
`;
