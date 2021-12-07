import React from 'react'
import { Products } from '../components'
import { popularProducts } from '../data'
import { ProductContainer } from '../containers' 

export default function ProductsContainer ()
{
     return(
        <Products>
           {popularProducts.map((item) =>(
               <ProductContainer item = {item} key={item.id}/>
           ))}
        </Products>
     )
}