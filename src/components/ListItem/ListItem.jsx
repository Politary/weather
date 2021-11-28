import React from 'react';
import { StyledListItem, Item } from './ListItem.styles';

export const ListItem = ({ name, country }) => {
    return (
        <StyledListItem>
            <a href={'/'}>
                <Item>{name}</Item>
                <Item>{country}</Item>
            </a>
        </StyledListItem>
    );
};
