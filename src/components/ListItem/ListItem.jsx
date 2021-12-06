import React from 'react';
import { StyledListItem, Item } from './ListItem.styles';

export const ListItem = ({ name, handleSearch }) => {
    return (
        <StyledListItem>
            <button value={name} onClick={() => handleSearch(name)}>
                <Item>{name}</Item>
            </button>
        </StyledListItem>
    );
};
