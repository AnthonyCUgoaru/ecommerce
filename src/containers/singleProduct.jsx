import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import {SingleProduct} from '../components'

export default function SingleProductContainer ()
{
     return(
        <SingleProduct>
            <SingleProduct.Wrapper>
                <SingleProduct.ImageContainer>
                    <SingleProduct.Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </SingleProduct.ImageContainer>
                <SingleProduct.InfoContainer>
                    <SingleProduct.Title>Denim Jumpsuit</SingleProduct.Title>
                    <SingleProduct.Desc>This is where I would describe the the product and why you should buy it but who really cares cuz no one is gonna read this anyways</SingleProduct.Desc>
                    <SingleProduct.Price>$20</SingleProduct.Price>
                    <SingleProduct.FilterContainer>
                        <SingleProduct.Filter>
                            <SingleProduct.FilterTitle>Color</SingleProduct.FilterTitle>
                            <SingleProduct.FilterColor color="black"/>
                            <SingleProduct.FilterColor color="darkblue"/>
                            <SingleProduct.FilterColor color="gray"/>
                            <SingleProduct.FilterColor color="pink"/>
                        </SingleProduct.Filter>
                        <SingleProduct.Filter>
                            <SingleProduct.FilterTitle>Size</SingleProduct.FilterTitle>
                            <SingleProduct.FilterSize>
                                <SingleProduct.FilterSizOption>XXS</SingleProduct.FilterSizOption>
                                <SingleProduct.FilterSizOption>XS</SingleProduct.FilterSizOption>
                                <SingleProduct.FilterSizOption>S</SingleProduct.FilterSizOption>
                                <SingleProduct.FilterSizOption>M</SingleProduct.FilterSizOption>
                                <SingleProduct.FilterSizOption>L</SingleProduct.FilterSizOption>
                                <SingleProduct.FilterSizOption>XL</SingleProduct.FilterSizOption>
                                <SingleProduct.FilterSizOption>XXL</SingleProduct.FilterSizOption>
                            </SingleProduct.FilterSize>
                        </SingleProduct.Filter>
                    </SingleProduct.FilterContainer>
                    <SingleProduct.AddContainer>
                        <SingleProduct.AmountContainer>
                            <Remove/>
                            <SingleProduct.Amount>1</SingleProduct.Amount>
                            <Add/>
                        </SingleProduct.AmountContainer>
                        <SingleProduct.Button>ADD TO CART</SingleProduct.Button>
                    </SingleProduct.AddContainer>
                </SingleProduct.InfoContainer>
            </SingleProduct.Wrapper>
        </SingleProduct>
     )
}