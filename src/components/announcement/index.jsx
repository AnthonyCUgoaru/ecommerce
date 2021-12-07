import React from 'react'
import {Container} from './styles/announcement';

export default function Announcement({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}