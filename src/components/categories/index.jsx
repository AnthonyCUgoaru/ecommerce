import React from 'react'
import {Container} from './styles/categories';

export default function Categories({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}