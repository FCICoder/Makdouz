'use client'
import React, { useState } from "react";
import styles from "./home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img0 from "../../../public/home2.webp";
import img1 from "../../../public/home3.webp";
import img2 from "../../../public/home4.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
const Swiper2 = () => {
      const  [sliderRef,setSliderRef] = useState(null)
  const Cards = [
    {
      imageSrc: img0,
      title: "Makdouz",
      description: "Makdouz slider images",
    },
    {
      imageSrc: img1,
      title: "Makdouz",
      description: "Makdouz slider images",
    },
    {
      imageSrc: img2,
      title: "Makdouz",
      description: "Makdouz slider images",
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
    swipeToSlide: true,
  };

  return (
    <div className="position-relative" >
      <Slider
        ref={(slider) => setSliderRef(slider)}
        {...settings}
        className={`m-auto    ${styles.slider}`}
        style={{ width: "100%" }}
      >
        {Cards?.map((item, index) => {
          return (
            <div className={` w-100  ${styles.image}  text-center `} key={index}>
              <Image
                src={item.imageSrc}
                alt={item.description}
                width="85%"
                height="80%"
                style={{borderRadius: "15px"}}
                className="m-auto w-75 h-50 "
                priority={true}
              />
            </div>
          );
        })}
      </Slider>
      <button 
      onClick={()=>sliderRef.slickNext()} 
      className={` ${styles.nextbtn1}`} 
      >
        <FaChevronRight />
      </button>
      <button 
      onClick={()=>sliderRef.slickPrev()}
      className={` ${styles.prevbtn1}`} 
      >
        <FaChevronLeft />
      </button>
    </div>
  );
};

export default Swiper2;
