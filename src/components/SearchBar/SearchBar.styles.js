import styled from 'styled-components/macro';

export const StyledSearchBar = styled.input`
    box-sizing: border-box;
    width: 595px;
    height: 50px;
    border: none;
    border-radius: 6px 0 0 6px;
    background-color: white;
    padding: 14px 16px;
    color: #8ca4b3;
    &:focus,
    &:active,
    &:focus-visible {
        border: none;
        outline: none;
    }
`;
