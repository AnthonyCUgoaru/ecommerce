import React from 'react'
import { Dresses } from '../components'

export default function DressesContainer ()
{
     return(
         <Dresses>
             <Dresses.Title> Dresses </Dresses.Title>
             <Dresses.FilterContainer>
                <Dresses.Filter>
                    <Dresses.FilterText>Filter Products:</Dresses.FilterText>
                    <Dresses.Select>
                        <Dresses.Option disabled selected>Color</Dresses.Option>
                        <Dresses.Option>White</Dresses.Option>
                        <Dresses.Option>Black</Dresses.Option>
                        <Dresses.Option>Red</Dresses.Option>
                        <Dresses.Option>Blue</Dresses.Option>
                        <Dresses.Option>Yellow</Dresses.Option>
                        <Dresses.Option>Green</Dresses.Option>
                    </Dresses.Select>
                    <Dresses.Select>
                        <Dresses.Option disabled selected>Size</Dresses.Option>
                        <Dresses.Option>XXS</Dresses.Option>
                        <Dresses.Option>XS</Dresses.Option>
                        <Dresses.Option>S</Dresses.Option>
                        <Dresses.Option>M</Dresses.Option>
                        <Dresses.Option>L</Dresses.Option>
                        <Dresses.Option>XL</Dresses.Option>
                        <Dresses.Option>XXL</Dresses.Option>
                    </Dresses.Select>
                </Dresses.Filter>
                <Dresses.Filter>
                    <Dresses.FilterText>Sort Products:</Dresses.FilterText>
                    <Dresses.Select>
                        <Dresses.Option  selected>Newest</Dresses.Option>
                        <Dresses.Option>Price (asc)</Dresses.Option>
                        <Dresses.Option>Price (desc)</Dresses.Option>
                       
                    </Dresses.Select>
                </Dresses.Filter>
             </Dresses.FilterContainer>
             </Dresses>
     )
}