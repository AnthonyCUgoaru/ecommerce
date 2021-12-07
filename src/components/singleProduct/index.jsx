import React from 'react';
import 
{
  Container, 
  Wrapper, 
  ImageContainer, 
  Image, 
  InfoContainer, 
  Title, 
  Desc, 
  Price, 
  FilterContainer, 
  Filter, FilterTitle, 
  FilterColor, 
  FilterSize, 
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button
} from './styles/singleProduct';

export default function SingleProduct({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container> 
    )
}

SingleProduct.Wrapper = function SingleProductWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

SingleProduct.ImageContainer = function SingleProductImageContainer({ children, ...restProps }) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
}

SingleProduct.Image = function SingleProductImage({  ...restProps }) {
  return <Image {...restProps}/>
}

SingleProduct.InfoContainer = function SingleProductInfoContainer({ children, ...restProps }) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
}

SingleProduct.Title = function SingleProductTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

SingleProduct.Desc = function SingleProductDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
}

SingleProduct.Price = function SingleProductPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
}

SingleProduct.FilterContainer = function SingleProductFilterContainer({ children, ...restProps }) {
  return <FilterContainer {...restProps}>{children}</FilterContainer>;
}

SingleProduct.Filter = function SingleProductFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>;
}

SingleProduct.FilterTitle = function SingleProductFilterTitle({ children, ...restProps }) {
  return <FilterTitle {...restProps}>{children}</FilterTitle>;
}

SingleProduct.FilterColor = function SingleProductFilterColor({color, ...restProps }) {
  return <FilterColor active={color} {...restProps}/>
}

SingleProduct.FilterSize = function SingleProductFilterSize({ children, ...restProps }) {
  return <FilterSize {...restProps}>{children}</FilterSize>;
}

SingleProduct.FilterSizOption = function SingleProductFilterSizeOption({ children, ...restProps }) {
  return <FilterSizeOption  {...restProps}>{children}</FilterSizeOption>;
}

SingleProduct.AddContainer = function SingleProductAddContainer({ children, ...restProps }) {
  return <AddContainer {...restProps}>{children}</AddContainer>;
}

SingleProduct.AmountContainer = function SingleProductAmountContainer({ children, ...restProps }) {
  return <AmountContainer {...restProps}>{children}</AmountContainer>;
}

SingleProduct.Amount = function SingleProductAmount({ children, ...restProps }) {
  return <Amount {...restProps}>{children}</Amount>;
}

SingleProduct.Button = function SingleProductButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}

