import React from 'react';
import 
{
NavbarContainer, 
AnnouncementContainer, 
SliderContainer, 
CategoriesContainer, 
ProductsContainer, 
NewsletterContainer, 
FooterContainer
} from '../containers'


export default function Home ()
{
    return(
        <>
            <AnnouncementContainer/>
            <NavbarContainer/> 
            <SliderContainer/>
            <CategoriesContainer/>
            <ProductsContainer/>
            <NewsletterContainer/>
            <FooterContainer/>
        </>
    )
}