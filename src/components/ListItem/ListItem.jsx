import React from 'react';
import { StyledListItem, Item } from './ListItem.styles';

export const ListItem = ({ name, coordinates, handleSearch }) => {
    return (
        <StyledListItem>
            <button value={name} onClick={() => handleSearch(coordinates)}>
                <Item>{name}</Item>
            </button>
        </StyledListItem>
    );
};
