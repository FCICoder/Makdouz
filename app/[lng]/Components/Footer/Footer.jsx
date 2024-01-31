import Image from "next/image";
import React from "react";
import fStyle from "./footer.module.css";
import logo from "../../../../public/img.jpg";
// import insta from "../../../../assets/instagram.png";
import { useTranslation } from "../../../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import Link from "next/link";

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container-fluid  px-auto mt-2 py-2 shadow">
        <div className="row mt-2 p-0 w-100 d-flex justify-content-center align-items-center">
          <div className="col-lg-3 col-md-6 m-auto d-flex justify-content-center align-items-center ">
            <div className="my-2">
              <Image
                src={logo.src}
                width={200}
                height={200}
                className="rounded-circle img-fluid"
                alt="Makdouz logo"
              ></Image>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 d-flex flex-column align-items-center ">
            <h1 className={`${fStyle.responsiveText} ${fStyle.decorate} `}>
              {t("part9")}
            </h1>
            <p className={`${fStyle.address} mt-3 text-center`}>
              <i className=" fas fa-location-dot me-2 text-muted"></i>
              {t("part10")}
              {t("part11")}
              {t("part12")}
              {t("part13")}
            </p>
            <div className="d-flex mt-1 mb-1">
              <p className={`me-1 text-muted  mt-1 ${fStyle.icons}`}>
                <i className="fa fa-phone me-2 "></i>
                {t("part21")}
              </p>
              <a
                href="tel:+20102241805"
                className="text-decoration-none mt-auto "
              >
                <p className={`${fStyle.responsiveLink}  me-2   `}>
                  {lng === "en"
                    ? "(+20 ) 10 22 64 1805"
                    : "1805 64 22 10 (20+)"}
                </p>
              </a>
            </div>
            <div className="d-flex  mb-1">
              <p className={`me-1 text-muted  mt-1 ${fStyle.icons}`}>
                <i className="fas fa-envelope me-2 text-muted "></i>{" "}
                {t("part22")}
              </p>
              <a
                href="mailto:info@makdouz.com"
                className="text-decoration-none text-muted   mt-auto "
              >
                <p className={`${fStyle.responsiveLink}  me-2  `}>
                  info@makdouz.com
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center ">
            <h1 className={`${fStyle.responsiveText} ${fStyle.decorate} mx-2`}>
              {t("part6")}
            </h1>
            <ul className="list-unstyled p-1 m-1">
              <li>
                <div className="d-flex ">
                  <p className={`me-1 text-muted  mt-1 ${fStyle.icons}`}>
                    <i className="fa fa-phone me-2 "></i>
                    {t("part21")}
                  </p>
                  <a
                    href="tel:+201010207764"
                    className="text-decoration-none  mt-auto  "
                  >
                    <p className={`${fStyle.responsiveLink}  me-2 `}>
                      {lng == "en"
                        ? "(+20 ) 10 10 20 7764"
                        : "7764 20 10 10 (20+)"}
                    </p>
                  </a>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <p className={`me-1 text-muted  mt-1 ${fStyle.icons}`}>
                    <i className="fa fa-phone me-2 "></i>
                    {t("part21")}
                  </p>
                  <a
                    href="tel:+201010202218"
                    className="text-decoration-none  mt-auto  "
                  >
                    <p className={`${fStyle.responsiveLink}  me-2    `}>
                      {lng == "en"
                        ? "(+20 ) 10 10 20 2218"
                        : "2218 20 10 10 (20+)"}
                    </p>
                  </a>
                </div>
              </li>
              <li></li>
            </ul>
            <h1 className={`${fStyle.responsiveText} ${fStyle.decorate} mx-2`}>
              {t("part23")}
            </h1>
            <div className=" ">
              <div className="d-flex">
                <p className={`me-1 text-muted  mt-1 ${fStyle.icons}`}>
                  <i className="fa fa-phone me-2 "></i>
                  {t("part21")}
                </p>
                <a
                  href="tel:+201070097779"
                  className="text-decoration-none   mt-auto "
                >
                  <p className={`${fStyle.responsiveLink}  me-2   `}>
                    {lng === "en"
                      ? "(+20 ) 10 70 09 7779"
                      : "7779 09 70 10 (20+)"}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center ">
            <h1 className={`${fStyle.responsiveText}  ${fStyle.decorate} mx-2`}>
              {t("part1")}
            </h1>
            <ul className="list-unstyled p-2 mb-3 fst-italic">
              <li className="mt-1">
                <Link
                  href={`/${lng}/about-us`}
                  className={`${fStyle.responsiveLink}`}
                >
                  {t("part3")}
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href={`/${lng}/Contactus`}
                  className={`${fStyle.responsiveLink} `}
                >
                  {t("part4")}
                </Link>
              </li>
              <li className="mt-1">
                <Link href={`/${lng}/`} className={`${fStyle.responsiveLink} `}>
                  {t("part5")}
                </Link>
              </li>
            </ul>
            <div>
              <a
                href="https://www.facebook.com/onechemic"
                className="text-decoration-none   mt-auto "
                target="_blank"
              >
                <i className="fa-brands fa-facebook mx-2 fa-2xl"></i>
              </a>
              <a
                href="https://twitter.com/onechemic"
                className="text-decoration-none   mt-auto "
                target="_blank"
              >
                <i className="fa-brands fa-x-twitter mx-2 fa-2xl text-dark"></i>
              </a>
            </div>
          </div>
        </div>
        <hr style={{ color: "GrayText" }}></hr>
        <div className="d-flex justify-content-center ">
          <div>
            <span className={`${fStyle.address}  text-dark `}>
              {" "}
              {t("part14")}
            </span>
          </div>
          {/* <div className="flex-end" onClick={()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

        }}>
        <i className="fa-solid fa-circle-arrow-up fs-4 px-1"></i>
          <span className={`${fStyle.responsiveLink} fs-6`}>Back to top</span>
        </div> */}
        </div>
      </div>
    </div>
  );
};
