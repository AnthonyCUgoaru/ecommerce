import React,{useState} from 'react';
import { Slider } from '../components';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
import {sliderItems} from "../data"

export default function SliderContainer ()
{
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => 
    {
        if (direction === "left") 
        {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else 
        {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
      };

    return(
        <Slider>
            <Slider.Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Slider.Arrow >
                <Slider.Wrapper slideIndex={slideIndex}>
                    {sliderItems.map(item=>(
                    <Slider.Slide bg={item.bg} key={item.id} >
                        <Slider.ImgContainer>
                            <Slider.Image src={item.img}/>
                        </Slider.ImgContainer>
                        <Slider.InfoContainer>
                            <Slider.Title>{item.title}</Slider.Title>
                            <Slider.Description>{item.desc}</Slider.Description>
                            <Slider.Button>SHOP NOW</Slider.Button>
                        </Slider.InfoContainer>
                    </Slider.Slide>
                    ))}
                </Slider.Wrapper> 
            <Slider.Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Slider.Arrow>
        </Slider>


            
    )
}