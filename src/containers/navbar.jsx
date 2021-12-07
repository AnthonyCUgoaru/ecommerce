import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Navbar } from '../components';

export default function NavbarContainer ()
{
  return(
    <Navbar> 
      <Navbar.Wrapper>
        <Navbar.Left>
          <Navbar.Language>English</Navbar.Language>
          <Navbar.SearchContainer>
          <Navbar.Input/>
            <Search style={{color:"gray", fontSize:16}}/>
          </Navbar.SearchContainer>
        </Navbar.Left>
        <Navbar.Center>
          <Navbar.Logo>WEEB🌟</Navbar.Logo>
        </Navbar.Center>
        <Navbar.Right>
          <Navbar.MenuItem>REGISTER</Navbar.MenuItem>
          <Navbar.MenuItem>SIGN IN</Navbar.MenuItem>
          <Navbar.MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </Navbar.MenuItem>
        </Navbar.Right>
      </Navbar.Wrapper>
        
    </Navbar>
  )
}