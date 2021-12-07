import React from 'react'
import {Container, 
    Wrapper, 
    Left, 
    Center, 
    Right, 
    Language, 
    SearchContainer,
    Input,
    Logo,
    MenuItem
} from './styles/navbar';

export default function Navbar({ children, ...restProps }) 
{
    return (
        <Container {...restProps}>
          {children} 
        </Container>
    )
}

Navbar.Wrapper= function NavbarWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

Navbar.Left= function NavbarLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>;
}

Navbar.Center= function NavbarCenter({ children, ...restProps }) {
    return <Center {...restProps}>{children}</Center>;
}

Navbar.Right= function NavbarRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>;
}

Navbar.Language= function NavbarLanguage({ children, ...restProps }) {
    return <Language {...restProps}>{children}</Language>;
}

Navbar.SearchContainer= function NavbarSearchContainer({ children, ...restProps }) {
    return <SearchContainer {...restProps}>{children}</SearchContainer>;
}

Navbar.Input= function NavbarInput({ ...restProps }) {
    return <Input {...restProps}/>;
}

Navbar.Logo= function NavbarLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>;
}

Navbar.MenuItem= function NavbarMenuItem({ children, ...restProps }) {
    return <MenuItem {...restProps}>{children}</MenuItem>;
}