import React from 'react';
import { StyledListItem, Item } from './ListItem.styles';

export const ListItem = ({ name, country, id }) => {
    return (
        <StyledListItem>
            <button value={id} onClick={() => console.log(id)}>
                <Item>{name}</Item>
                <Item>{country}</Item>
            </button>
        </StyledListItem>
    );
};
