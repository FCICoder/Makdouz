"use client";
import React,{ useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img0 from "../../../public/carusel 2.webp";
import img1 from "../../../public/carusel 1.webp";
import styles from "./home.module.css";
import Image from "next/image";

function Carusel() {
  const  [sliderRef,setSliderRef] = useState(null)
  const Cards = [
    {
      imageSrc: img0,
      title: "oneChemic",
      description: "One chemic slider images",
    },
    {
      imageSrc: img1,
      title: "oneChemic",
      description: "one chemic slider images",
    },
  
  ];


  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 700,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    lazyLoad: false,
    swipeToSlide: true,
  };
  return (
    <div className=" overflowX-hidden  position-relative ">
      <Slider
        ref={(slider) => setSliderRef(slider)}
        {...settings}
        className={`m-auto    ${styles.slider}`}
        style={{ width: "100%" }}
      >
        {Cards.map((item, index) => {
          return (
            <div className={`${styles.image}  text-center `} key={index}>
              <Image
                src={item.imageSrc}
                alt={item.description}
                width="100%"
                height="100%"
                className="m-auto img-fluid h-100"
                priority={true}
              />
            </div>
          );
        })}
      </Slider>
      <button 
      onClick={()=>sliderRef.slickNext()} 
      className={` ${styles.nextbtn}`} 
      >
        <FaChevronRight />
      </button>
      <button 
      onClick={()=>sliderRef.slickPrev()}
      className={` ${styles.prevbtn}`} 
      >
        <FaChevronLeft />
      </button>
      
    </div>
  );
}

export default Carusel;
