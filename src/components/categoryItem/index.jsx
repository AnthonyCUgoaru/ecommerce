import React from 'react'
import {Container, Image, Info, Title, Button} from './styles/categoryItem';

export default function CategoryItem({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}
CategoryItem.Image = function CategoryItemImage({ ...restProps }) {
  return <Image {...restProps}/>
}

CategoryItem.Info = function CategoryItemInfo({ children, ...restProps }) {
  return <Info{...restProps}>{children}</Info>;
}

CategoryItem.Title= function CategoryItemTitle({ children, ...restProps }) {
  return <Title{...restProps}>{children}</Title>;
}

CategoryItem.Button= function CategoryItemButton({ children, ...restProps }) {
  return <Button{...restProps}>{children}</Button>;
}