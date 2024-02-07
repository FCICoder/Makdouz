"use client";
import React, { useEffect, useState } from "react";
import products from "../products/products.json";
import Images from "./Images";
import Link from "next/link";

const page = ({ params: { lng } }) => {
    const [product, setProduct] = useState([]);
    const [prdId, setPrdId] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const productId = urlSearchParams.get("id");
            if (productId) {
                setPrdId(Number(productId));
                const prd = products?.products.filter((prd) => prd.id == productId);
                setProduct(prd);
            }
        }
    }, []);

    const handleNextPrd = () => {
        if (prdId < products.products.length ) {
            setPrdId(prdId => prdId + 1);
            window.location.search = `id= ${prdId + 1}`;
        }
    };

    const handlePrevPrd = () => {
        if (prdId > 0) {
            setPrdId(prevPrdId => prevPrdId - 1);
            window.location.search = `id= ${prdId - 1}`;
        }
    };

   

    return (
        <div>
            <div className="row">
                <div className="col-md-5">
                    {product?.map((prd, index) => (
                        <Images images={lng === 'en' ? prd?.en.images : prd?.ar.images} key={index} />
                    ))}
                </div>
                <div className="col-md-7">
                    {product?.map((prd, index) => (
                        <div key={index}>
                            <div className="d-flex justify-content-between ">
                            <h2 id="prdDetails_title">{lng === 'en' ? prd.en.name : prd.ar.name}</h2>
                            <div>
                                {
                                    (lng=='en')?
                                    <>
                                    {prdId > 1 &&
                                        <Link
                                            href={{
                                                pathname: `/${lng}/productDetails`,
                                                query: { id: `${prdId - 1}` },
                                            }}
                                        >
                                            <i className="fas fa-chevron-left text-body-secondary prdDetails_products " aria-hidden="true" onClick={handlePrevPrd}></i>
                                        </Link>
                                    }
                                    {prdId < products.products.length  &&
                                        <Link
                                            href={{
                                                pathname: `/${lng}/productDetails`,
                                                query: { id: `${prdId + 1}` },
                                            }}
                                        >
                                            <i className="fas fa-chevron-right text-body-secondary prdDetails_products"  aria-hidden="true" onClick={handleNextPrd}></i>
                                        </Link>
                                    }
                                    </>
                                    
                                    :
                                    <>
                                    {prdId > 1 &&
                                        <Link
                                            href={{
                                                pathname: `/${lng}/productDetails`,
                                                query: { id: `${prdId - 1}` },
                                            }}
                                        >
                                            <i className="fas fa-chevron-right text-body-secondary prdDetails_products " aria-hidden="true" onClick={handlePrevPrd}></i>
                                        </Link>
                                    }
                                    {prdId < products.products.length  &&
                                        <Link
                                            href={{
                                                pathname: `/${lng}/productDetails`,
                                                query: { id: `${prdId + 1}` },
                                            }}
                                        >
                                            <i className="fas fa-chevron-left text-body-secondary prdDetails_products"  aria-hidden="true" onClick={handleNextPrd}></i>
                                        </Link>
                                    }
                                    </>
                                
                                }
                            
                            
                            </div>
                           

                            </div>
                            
                            <p id="prdDetails_desription" className="ms-4">
                                {lng === 'en' ? prd.en.description : prd.ar.description}
                            </p>
                            <div className="mt-5">
                                <h2 id="prdDetails_title">{lng === 'en' ? "Description" : "الوصف"}</h2>
                                <ul id="unorderedList" dangerouslySetInnerHTML={{ __html: lng === 'en' ? prd?.en.descriptionList : prd?.ar.descriptionList }}></ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page;
