import { Send } from '@material-ui/icons'
import React from 'react'
import { Newsletter } from '../components'


export default function NewsletterContainer ()
{
     return(
        <Newsletter>
          <Newsletter.Title>Newsletter</Newsletter.Title>
          <Newsletter.Description> Get timely from your favorite products</Newsletter.Description>
          <Newsletter.InputContainer>
             <Newsletter.Input placeholder="Your email"/>
             <Newsletter.Button>
                <Send/>
             </Newsletter.Button>
          </Newsletter.InputContainer>
        </Newsletter>
     )
}