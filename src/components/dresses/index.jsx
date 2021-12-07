import React from 'react';
import {Container, Title, FilterContainer, Filter, FilterText, Select, Option} from './styles/dresses';

export default function Dresses({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container> 
    )
}

Dresses.Title = function DressesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Dresses.FilterContainer = function DressesFilterContainer({ children, ...restProps }) {
    return <FilterContainer {...restProps}>{children}</FilterContainer>;
}

Dresses.Filter = function DressesFilter({ children, ...restProps }) {
    return <Filter {...restProps}>{children}</Filter>;
}

Dresses.FilterText = function DressesFilterText({ children, ...restProps }) {
    return <FilterText {...restProps}>{children}</FilterText>;
}

Dresses.Select = function DressesSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
}

Dresses.Option = function DressesOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>;
}