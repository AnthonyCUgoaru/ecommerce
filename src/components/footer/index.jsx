import React from 'react';
import {Container, Left, Center, Right, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment} from './styles/footer';

export default function Footer({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container> 
    )
}

Footer.Left = function FooterLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
}

Footer.Center = function FooterCenter({ children, ...restProps }) {
  return <Center {...restProps}>{children}</Center>;
}

Footer.Right = function FooterRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
}

Footer.Logo = function FooterLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
}

Footer.Description = function FooterDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
}

Footer.SocialContainer = function FooterSocialContainer({ children, ...restProps }) {
  return <SocialContainer {...restProps}>{children}</SocialContainer>;
}

Footer.SocialIcon = function FooterSocialIcon({ color , children, ...restProps }) {
  return <SocialIcon active={color} {...restProps}>{children}</SocialIcon>;
}

Footer.Title = function FooterTitle({children, ...restProps }) {
  return <Title  {...restProps}>{children}</Title>;
}

Footer.List = function FooterList({  children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
}

Footer.ListItem = function FooterListItem({  children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
}

Footer.ContactItem = function FooterContactItem({ children, ...restProps }) {
  return <ContactItem {...restProps}>{children}</ContactItem>;
}

Footer.Payment = function FooterPayment({...restProps }) {
  return <Payment {...restProps}/>;
}