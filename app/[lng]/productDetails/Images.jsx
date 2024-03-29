"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system"
import { CarouselProvider, Slider, Slide, ImageWithZoom, DotGroup,   ButtonBack, ButtonNext  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Image from 'next/image';
import compStyling from './ImageCarousel.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Images = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageData, setImageData] = useState(props.images);
  const handleClickPreviousEvent = (event) => {
    setCurrentSlide(currentSlide - 1)
    if(currentSlide <= 0) {
        setCurrentSlide(imageData.length - 1)
    }
  }

  const handleClickNextEvent = (event) => {
    setCurrentSlide(currentSlide + 1)
    if(currentSlide >= imageData.length - 1) {
        setCurrentSlide(0)
    }
  }
  
  return <>
<Container maxWidth='sm'>
      <Grid container spacing={2}>
         
         <Grid item xs={10}>
         
          <CarouselProvider
            visibleSlides={1}
            totalSlides={props.images.length}
            currentSlide={currentSlide}
            step={2}
            naturalSlideWidth={200}
            naturalSlideHeight={220}
            hasMasterSpinner
            infinite            
          >
          <div className={compStyling.container } >       
            <Slider className={compStyling.slider}>

            {props.images.map((item, index) => (                
                <Slide key={index}>
                
                   <ImageWithZoom  src={item} key={index}/>
                
                </Slide>
                              
              ))}            
            </Slider>
            <ButtonBack className={compStyling.buttonBack} onClick={(e) => handleClickPreviousEvent(e)}><ArrowBackIosIcon/></ButtonBack>
            <ButtonNext className={compStyling.buttonNext}  onClick={(e) => handleClickNextEvent(e)}> <ArrowForwardIosIcon/></ButtonNext>
            </div>
            {/* <DotGroup dotNumbers /> */}
            
         </CarouselProvider>
         <Grid item xs={12}>

<Stack direction="row" spacing={4} sx={{ maxHeight: 200 }} className="mt-1 m-auto"  >
 {props.images.map((item, index) => (
   <Box sx={{ maxWidth: 200, maxHeight: 200, cursor: 'pointer' }}  onClick={() => setCurrentSlide(index)}>
     <Image src={item} width="70" height="70" className={index===currentSlide && compStyling.glow} alt="Makdouz details images" />
   </Box>
 ))}            
</Stack>

</Grid>
        </Grid>
      </Grid>
    </Container>
  </>;
};

export default Images;
