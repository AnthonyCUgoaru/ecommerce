import React from 'react';
import {Container, Title, Description, InputContainer, Input, Button} from './styles/newsletter';

export default function Newsletter({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container> 
    )
}

Newsletter.Title = function NewsletterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Newsletter.Description = function NewsletterDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
}

Newsletter.InputContainer = function NewsletterInputContainer({ children, ...restProps }) {
  return <InputContainer {...restProps}>{children}</InputContainer>;
}

Newsletter.Input = function NewsletterInput({  ...restProps }) {
  return <Input {...restProps}/>
}

Newsletter.Button = function NewsletterButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}