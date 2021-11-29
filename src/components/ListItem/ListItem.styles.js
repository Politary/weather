import styled from 'styled-components/macro';

export const StyledListItem = styled.li`
    height: 65px;
    background: transparent;
    border-bottom: 1px solid #8ca4b3;
    color: #435865;
    font-weight: 500;
    button {
        cursor: pointer;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #435865;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
    }
`;

export const Item = styled.div`
    margin: 0 12px;
`;
