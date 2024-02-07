"use client"
import React, { useState } from 'react';
import products from './products.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params: { lng } }) {
  const [hoveredImages, setHoveredImages] = useState(new Array(products.products.length).fill(false));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = (index, imgSrc) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[index] = imgSrc;
    setHoveredImages(newHoveredImages);
  };

  const handleMouseLeave = (index) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[index] = false;
    setHoveredImages(newHoveredImages);
  };

  const handleImageClick = (prd) => {
    setSelectedProduct(prd);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.en.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProduct.en.images.length) % selectedProduct.en.images.length);
  };

  const [activeIcon, setActiveIcon] = useState('grid');

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };
  return (<>
    <div>
      <p id="prd_p">{
        (lng == 'en') ? "Ready to enhance your product offerings with premium pickles and preserves? Explore our wide range of olives, cucumbers, peppers, carrots, and turnips to find the perfect options for your business. Whether you are a pickle factory or a customer in need of large quantities in drums, Makdouz is here to fulfill your requirements."
          :
          "هل أنت على استعداد لتعزيز عروض منتجاتك من خلال المخللات والمعلبات المتميزة؟ استكشف مجموعتنا الواسعة من الزيتون والخيار والفلفل والجزر واللفت للعثور على الخيارات المثالية لعملك. سواء كنت مصنع مخللات أو عميلاً يحتاج إلى كميات كبيرة من البراميل، مكدوز هنا لتلبية متطلباتك."
      }
      </p>
      <div id='grid_system'>
        <i
          className={`fas fa-th ${activeIcon === 'grid' ? 'active' : ''}`}
          aria-hidden='true'
          role='img'
          onClick={() => handleIconClick('grid')}
        ></i>

        <i
          className={`fas fa-list ${activeIcon === 'list' ? 'active' : ''}`}
          aria-hidden='true'
          role='img'
          onClick={() => handleIconClick('list')}
        ></i>
      </div>
      {
        activeIcon === 'list' ?
          <div className='mt-4 ps-3'>
            <div className='row g-5 d-flex flex-column '>
              {products.products?.map((prd, index) => <div className='row ' key={index} >
                  <div className="col-md-4 " >
                    <div className=' '>
                      {(lng === 'en') ? (
                        <div className=' text-center   ' id="connnte" >
                          <Link 
                          href={{
                            pathname: `/${lng}/productDetails`,
                            query: { id: `${prd.id}` },
                          }}
                          id='prd_Link1' className='  '>
                            <div id='content-prds' className='' >
                              <Image
                                id='prd_image'
                                className='pb-4 '
                                src={hoveredImages[index] || prd.en.img1}
                                width={500}
                                height={200}
                                style={{ width: 'auto', height: "auto" }}
                                onMouseEnter={() => handleMouseEnter(index, prd.en.img2)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                alt='makdouz products'
                              />

                            </div>
                            <div id='icon' className='m-0'>
                              <span className=' d-flex justify-content-center text-uppercase' onClick={() => handleImageClick(prd)}>
                                <i className="far fa-eye mx-3" aria-hidden="true" role="img"></i>
                                <p className=' m-0  m-0 ' style={{ fontSize: "14px" }}>
                                  Quick view
                                </p>
                              </span>
                            </div>
                          </Link>

                        </div>
                      ) : (
                        <div className=' text-center  ' id="connnte" >
                          <Link 
                           href={{
                            pathname: `/${lng}/productDetails`,
                            query: { id: `${prd.id}` },
                          }}
                          id='prd_Link1' className=' '>
                            <div id='content-prds' >
                              <Image
                                id='prd_image'
                                className='pb-4'
                                src={hoveredImages[index] || prd.ar.img1}
                                width={500}
                                height={200}
                                style={{ width: 'auto', height: "auto" }}
                                onMouseEnter={() => handleMouseEnter(index, prd.ar.img2)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                alt='منتجات مكدوز'
                              />
                            </div>
                            <div id='icon' className='m-0'>
                              <span className=' d-flex justify-content-center text-uppercase' onClick={() => handleImageClick(prd)}>
                                <i className="far fa-eye mx-3" aria-hidden="true" role="img"></i>
                                <p className=' m-0  m-0 ' style={{ fontSize: "14px" }}>
                                  نظره سريعه
                                </p>
                              </span>
                            </div>
                          </Link>

                        </div>
                      )}
                    </div>
                  </div>
                  <div className=' col-md-8    d-flex justify-content-center align-items-center flex-column '>
                    <span id='prd_Link' className='p-1' style={{ fontSize: "24px" }}>
                      {
                        (lng == 'en') ?
                          prd.en.name
                          :
                          prd.ar.name
                      }
                    </span>
                    <p className='mt-4' style={{fontSize:"14px"}}>
                      {
                        (lng == 'en') ?
                          prd.en.description
                          :
                          prd.ar.description
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          :
          <div className='mt-4'>
            <div className='row g-5 '>
              {products.products?.map((prd, index) => (
                <div className="col-md-4 " key={index}>
                  <div>
                    {(lng === 'en') ? (
                      <div className=' text-center  ' id="connnte" >
                        <Link 
                         href={{
                          pathname: `/${lng}/productDetails`,
                          query: { id: `${prd.id}` },
                        }}
                        id='prd_Link1' className=' '>
                          <div id='content-prds' >
                            <Image
                              id='prd_image'
                              className='pb-4'
                              src={hoveredImages[index] || prd.en.img1}
                              width={500}
                              height={200}
                              style={{ width: 'auto', height: "auto" }}
                              onMouseEnter={() => handleMouseEnter(index, prd.en.img2)}
                              onMouseLeave={() => handleMouseLeave(index)}
                              alt='makdouz products'
                            />
                          </div>
                          <div id='icon' className='m-0'>
                            <span className=' d-flex justify-content-center text-uppercase' onClick={() => handleImageClick(prd)}>
                              <i className="far fa-eye mx-3" aria-hidden="true" role="img"></i>
                              <p className=' m-0  m-0 ' style={{ fontSize: "14px" }}>
                                Quick view
                              </p>
                            </span>
                          </div>
                        </Link>
                        <div>
                          <span id='prd_Link'>
                            {prd.en.name}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className=' text-center  ' id="connnte" >
                        <Link  
                        href={{
                            pathname: `/${lng}/productDetails`,
                            query: { id: `${prd.id}` },
                          }}
                           id='prd_Link1' className=' '>
                          <div id='content-prds' >
                            <Image
                              id='prd_image'
                              className='pb-4'
                              src={hoveredImages[index] || prd.ar.img1}
                              width={500}
                              height={200}
                              style={{ width: 'auto', height: "auto" }}
                              onMouseEnter={() => handleMouseEnter(index, prd.ar.img2)}
                              onMouseLeave={() => handleMouseLeave(index)}
                              alt='منتجات مكدوز'
                            />
                          </div>
                          <div id='icon' className='m-0'>
                            <span className=' d-flex justify-content-center text-uppercase' onClick={() => handleImageClick(prd)}>
                              <i className="far fa-eye mx-3" aria-hidden="true" role="img"></i>
                              <p className=' m-0  m-0 ' style={{ fontSize: "14px" }}>
                                نظره سريعه
                              </p>
                            </span>
                          </div>
                        </Link>
                        <div>
                          <span id='prd_Link'>
                            {prd.ar.name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
      }

      {selectedProduct && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="modal-dialog" style={{ maxWidth: '80%', margin: 'auto', marginTop: '5vh' }}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="text-center  d-flex justify-content-center align-items-center h-100">
                  <div id='layout_image' className='bg-black my-auto'>
                  
                  <i role='button' className="  fas fa-chevron-left" onClick={handlePrevImage}></i>
                    <Image
                      id='image_out'
                      src={selectedProduct.en.images[currentImageIndex]}
                      width={500}
                      height={200}
                      className='h-100 '
                      style={{ width: 'auto', height: 'auto' }}
                      alt='product images'
                    />
                    <i role='button' className="  fas fa-chevron-right" onClick={handleNextImage}></i>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  );
}
