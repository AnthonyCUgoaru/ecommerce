import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import { Footer } from '../components'


export default function FooterContainer ()
{
     return(
        <Footer>
          <Footer.Left>
            <Footer.Logo> WEEB 🌟</Footer.Logo>
            <Footer.Description> The words are suppose to fill in the description talking about the anime e-commerce website so im saying random stuff here for now until I fill them up</Footer.Description>
            <Footer.SocialContainer> 
               <Footer.SocialIcon color="3B5999"> 
                  <Facebook/>
               </Footer.SocialIcon>
               <Footer.SocialIcon color="E4405F"> 
                  <Instagram/>
               </Footer.SocialIcon>
               <Footer.SocialIcon color="55ACEE"> 
                  <Twitter/>
               </Footer.SocialIcon>
               <Footer.SocialIcon color="E60023"> 
                  <Pinterest/>
               </Footer.SocialIcon>
            </Footer.SocialContainer>
          </Footer.Left>
          <Footer.Center> 
             <Footer.Title>Useful Links</Footer.Title>
             <Footer.List>
                <Footer.ListItem>Home</Footer.ListItem>
                <Footer.ListItem>Cart</Footer.ListItem>
                <Footer.ListItem>Man Fashion</Footer.ListItem>
                <Footer.ListItem>Woman Fashion</Footer.ListItem>
                <Footer.ListItem>Accessories</Footer.ListItem>
                <Footer.ListItem>My Account</Footer.ListItem>
                <Footer.ListItem>Order Tracking</Footer.ListItem>
                <Footer.ListItem>Wishlist</Footer.ListItem>
                <Footer.ListItem>Terms</Footer.ListItem>
                <Footer.ListItem>About</Footer.ListItem>
             </Footer.List>
          </Footer.Center>
          <Footer.Right>
             <Footer.Title>Contacts</Footer.Title>
             <Footer.ContactItem><Room style={{marginRight:"10px"}}/>123 Sesame Street, Newark, New Jersey 07101</Footer.ContactItem>
             <Footer.ContactItem><Phone style={{marginRight:"10px"}}/>+1 732 732 7322</Footer.ContactItem>
             <Footer.ContactItem><MailOutline style={{marginRight:"10px"}}/>weebstar@gmail.com</Footer.ContactItem>
             <Footer.Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
          </Footer.Right>
        </Footer>
     )
}