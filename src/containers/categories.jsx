import React from 'react'
import {Categories} from '../components'
import {categories} from "../data"
import {CategoryItemContainer} from '../containers'

export default function CategoriesContainer ()
{
    return(
        <Categories>
          {categories.map(item => (
            < CategoryItemContainer item={item} key={item.id}/>  
          ))}  
        </Categories>
    )

}