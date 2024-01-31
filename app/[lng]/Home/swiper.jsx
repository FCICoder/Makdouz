// "use client";
// import React, { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import img1 from "../../../assets/swiper/1.png";
// import img2 from "../../../assets/swiper/2.png";
// import img3 from "../../../assets/swiper/3.png";
// import img4 from "../../../assets/swiper/4.png";
// import img5 from "../../../assets/swiper/5.png";
// import styles from "./home.module.css";
// import Image from "next/image";
// function Swiper() {
//   const [sliderRef, setSliderRef] = useState(null);
//   const Cards = [
//     {
//       imageSrc: img1,
//       title: "oneChemic",
//       description: "One chemic swiper partners image 1",
//     },
//     {
//       imageSrc: img2,
//       title: "oneChemic",
//       description: "One chemic swiper partners image 2",
//     },
//     {
//       imageSrc: img3,
//       title: "oneChemic",
//       description: "One chemic swiper partners image 3",
//     },
//     {
//       imageSrc: img4,
//       title: "oneChemic",
//       description: "One chemic swiper partners image 4",
//     },
//     {
//       imageSrc: img5,
//       title: "oneChemic",
//       description: "One chemic swiper partners image 5",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     initialSlide: 0,
//     arrows:false,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="container mt-5 overflowX-hidden position-relative mb-5">
//       <h2 className=" text-center fst-italic fw-bold ">OUR PARTNERS</h2>
//       <Slider
//         ref={(slider) => setSliderRef(slider)}
//         className={`m-auto  mt-4  ${styles.slider}`}
//         {...settings}
//         style={{ width: "87%" }}
//       >
//         {Cards.map((item, index) => {
//           return (
//             <div className={`${styles.partners}  text-center `} key={index}>
//               <Image
//                 src={item.imageSrc}
//                 alt={item.description}
//                 width="100%"
//                 height="100%"
//                 className="m-auto img-fluid h-100"
//                 priority={true}
//               />
//             </div>
//           );
//         })}
//       </Slider>

//       <button
//         onClick={() => sliderRef.slickNext()}
//         className={` ${styles.nextbtnP}`}
//       >
//         <FaChevronRight />
//       </button>
//       <button
//         onClick={() => sliderRef.slickPrev()}
//         className={`btn  ${styles.prevbtnP}`}
//       >
        
//         <FaChevronLeft />
//       </button>
//     </div>
//   );
// }

// export default Swiper;
