'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Search from "../Search/Search";

const ContactLink = ({ lng }) => {


  const myLang = lng;
  return (
    <>
      <div className="container-fluid bg-light m-0 p-0">
        <div className="d-lg-flex p-4 justify-content-evenly">
          <div>
            <h3 className="pb-2">{(myLang === 'en') ? "Can't find what you are looking for?" : "لا تستطيع ايجاد ما تبحث عنه؟"}</h3>
            <p>{(myLang === 'en') ? "Our specialists will be happy to help you!" : "المختصين سوف يكونون سعداء بمساعدتك"}</p>
          </div>
          <div>
            <p className="text-primary mb-4 mt-5">
              <i className="fa fa-phone me-2"></i>
              {myLang === 'en' ? '(+20 ) 10 22 64 1805' : "1805 64 22 10 (20+)"}
            </p>
          </div>

          <div className=" border border-0 rounded text-light d-flex align-items-center ">
            <Link
              href={`../../${myLang}/Contactus`}
              className="btn bg-primary mt-2 mx-2 text-uppercase "
              style={{ fontWeight: "600" }}
            >

              {(myLang === 'en') ? "contact form" : "تواصل معنا"}
            </Link>
          </div>
        </div>
      <Search lng={lng}/>
       
      </div>
    </>
  );
};

export default ContactLink;
