import styled from 'styled-components/macro';

export const StyledCitiesList = styled.ul`
    position: fixed;
    background-color: #eff5f9;
    list-style-type: none;
    padding: 5px;
    margin: 0;
    top: ${(props) =>
        props.searchBarPosition.top + props.searchBarPosition.height + 'px'};
    left: ${(props) => props.searchBarPosition.left + 'px'};
    width: ${(props) => props.searchBarPosition.width + 50 + 'px'};
`;
