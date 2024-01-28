"use client";
import { useState } from "react";
import "./galleryStyle.css";

const ImageGallery = ({ images , lng }) => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handleNextPage = () => {
    // Ensure not to exceed the total number of pages
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(images.length / itemsPerPage))
    );
  };

  const handlePrevPage = () => {
    // Ensure not to go below the first page
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <>
      <div className=" h-100 p-auto" style={{backgroundColor:'white',paddingBottom:'40px !important'}} >
        {currentImages.map((image, index) => (
          <div key={index}  id="myContainer">
            <div id="image-container">
              <img src={image.url} alt={image.description} className="img-fluid "  />
            </div>
            <div id="image-desc">
              <p className="d-block text-bold fs-2">{image.description}</p>
              <p className="pb-5 mb-1 text-muted fst-italic" >
               {image.desc}
              </p>
            </div>
          </div>
        ))}
        <div  id="paginate-buttons" style={{paddingLeft:'18% ', paddingBottom:'80px' , marginTop:'20px'}}>
          <button
            className="mx-1 my-1 border-0 btn p-auto fs-2 lh-1 mt-5"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            
              
            {(lng == 'en' )? <i
              className="fa-solid fa-arrow-left fa-xs"
            ></i> :<i className="fa-solid fa-arrow-right fa-xs"
            ></i> }
          </button>
          <button
            className="mx-1 my-1 border-0  btn   p-auto fs-2 lh-1 mt-5"
            onClick={handleNextPage}
            disabled={endIndex >= images.length}
          >
            {(lng == 'en' )?<i
              className="fa-solid fa-arrow-right fa-xs"
              ></i> :<i
              className="fa-solid fa-arrow-left fa-xs"
            ></i> }
          </button>
        </div>
      </div>
   
    </>
  );
};

export default ImageGallery;
