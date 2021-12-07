import React from 'react';
import {NavbarContainer, AnnouncementContainer, NewsletterContainer, FooterContainer, SingleProductContainer} from '../containers'


export default function Product ()
{
    return(
        <>
           <NavbarContainer/>
           <AnnouncementContainer/>
           <SingleProductContainer/>
           <NewsletterContainer/>
           <FooterContainer/> 
        </>
    )
}