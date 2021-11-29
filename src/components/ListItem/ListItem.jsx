import React from 'react';
import { StyledListItem, Item } from './ListItem.styles';

export const ListItem = ({ name, country, id, handleSearch }) => {
    return (
        <StyledListItem>
            <button value={id} onClick={() => handleSearch(id)}>
                <Item>{name}</Item>
                <Item>{country}</Item>
            </button>
        </StyledListItem>
    );
};
