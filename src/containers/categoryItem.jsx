import React from 'react'
import {CategoryItem} from '../components'


export default function CategoryItemContainer ({item})
{
    return(
        <CategoryItem>
           <CategoryItem.Image src={item.img}/>
           <CategoryItem.Info>
               <CategoryItem.Title>{item.title}</CategoryItem.Title>
               <CategoryItem.Button>SHOP NOW</CategoryItem.Button>
           </CategoryItem.Info>
        </CategoryItem>
    )

}