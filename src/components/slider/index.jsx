import React from 'react'
import 
{
    Container, 
    Arrow, 
    Wrapper, 
    Slide, 
    ImgContainer, 
    InfoContainer, 
    Image,
    Title,
    Description,
    Button
        } from './styles/slider';

export default function Slider({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}

Slider.Arrow= function SliderArrow({ direction ,children, ...restProps }) {
    return <Arrow active={direction} {...restProps}>
        {children}</Arrow>;
}

Slider.Wrapper = function SliderWrapper({ slideIndex,children, ...restProps }) {
    return <Wrapper active={slideIndex}  {...restProps}>
        {children}</Wrapper>;
}

Slider.Slide = function SliderSlide({ bg, children, ...restProps }) {
    return <Slide active={bg} {...restProps}>{children}</Slide>;
}

Slider.ImgContainer = function SliderImgContainer({ children, ...restProps }) {
    return <ImgContainer  {...restProps}>{children}</ImgContainer>;
}

Slider.InfoContainer = function SliderInfoContainer({ children, ...restProps }) {
    return <InfoContainer {...restProps}>{children}</InfoContainer>;
}

Slider.Image = function SliderImage({ ...restProps }) {
    return <Image {...restProps}/>
}

Slider.Title = function SliderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Slider.Description = function SliderDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>;
}

Slider.Button = function SliderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

