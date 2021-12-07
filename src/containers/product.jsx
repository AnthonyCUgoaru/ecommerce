import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from '@material-ui/icons'
import React from 'react'
import { Product } from '../components'

export default function ProductContainer ({item})
{
     return(
        <Product>
           <Product.Circle/>
           <Product.Image src={item.img}/>
           <Product.Info>
               <Product.Icon>
                 <ShoppingBasketOutlined/>  
               </Product.Icon>
               <Product.Icon>
                 <SearchOutlined/> 
               </Product.Icon>
               <Product.Icon>
                 <FavoriteBorderOutlined/> 
               </Product.Icon>
           </Product.Info>
        </Product>
     )
}