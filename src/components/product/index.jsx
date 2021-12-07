import React from 'react';
import {Container, Circle, Image, Icon, Info} from './styles/product';

export default function Product({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}

Product.Circle = function ProductCircle({ ...restProps }) {
    return <Circle {...restProps}/>
}

Product.Image = function ProductImage({ ...restProps }) {
    return <Image {...restProps}/>
}

Product.Info = function ProductInfo({ children,...restProps }) {
    return <Info {...restProps}> {children} </Info>
}

Product.Icon = function ProductIcon({ children,...restProps }) {
    return <Icon {...restProps}> {children} </Icon>
}