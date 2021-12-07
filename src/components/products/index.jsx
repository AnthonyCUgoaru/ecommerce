import React from 'react';
import {Container} from './styles/products';

export default function Products({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}