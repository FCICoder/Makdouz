"use client";
import React from "react";
import styles from "./navbar.module.css";
import { languages } from "../../../i18n/settings";
if (typeof document !== "undefined") {
  import("bootstrap/dist/js/bootstrap.bundle.js");
}
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Nav_bar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../../../../public/cropped-3-1.png";
import Image from "next/image";
import Link from "next/link";
export const Navbar = ({ lng }) => {
  return (
    <>
      <Nav_bar expand="lg" id="Nav_bar" className="bg-body-tertiary">
        <Container>
          <Nav_bar.Brand href="/" id="brand" className="text-uppercase  p-3 ">
            <Image
              src={img}
              alt="Makdouz Brand"
              width={300}
              height={50}
              id="image-brand"
              style={{ width: "auto", height: "auto" }}
            />
          </Nav_bar.Brand>
          <div className={`language d-block d-lg-none  `}>
            {languages
              .filter((l) => lng !== l)
              .map((l, index) => {
                return (
                  <span key={l} className="" style={{ fontSize: "14px" }}>
                    {index > 0 && " or "}
                    <Link
                      id="language"
                      className="text-decoration-none"
                      href={`/${l}`}
                    >
                      {lng == "ar" ? "English" : "العربية"}
                    </Link>
                  </span>
                );
              })}
          </div>
          <Nav_bar.Toggle
            className=""
            id="toggle-button"
            aria-controls="basic-navbar-nav"
          />

          <Nav_bar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="Nav" href={`/${lng}`}>
                {lng == "en" ? "Home" : "الصفحةالرئيسيه"}
              </Nav.Link>
              <Nav.Link className="Nav" href= {`/${lng}/products`}>
                {lng == "en" ? "Products" : "المنتجات"}
              </Nav.Link>
              <Nav.Link className="Nav"  href= {`/${lng}/quote-request`}>
                {lng == "en" ? "quoteRequest" : "اطلب"}
              </Nav.Link>
              <Nav.Link className="Nav"   href= {`/${lng}/careers`}>
                {lng == "en" ? "Careers" : "مهنتنا"}
              </Nav.Link>
              <Nav.Link className="Nav"  href= {`/${lng}/about-us`}>
                {lng == "en" ? "AboutUs" : "نبذةعنا"}
              </Nav.Link>
              <Nav.Link
                className="Nav  "
                href="https://www.facebook.com/makdouz"
              >
                <i className="fab fa-facebook py-1 fs-3 " style={{marginTop:"25px"}}></i>
              </Nav.Link>
            </Nav>
          </Nav_bar.Collapse>
          <div className={`language d-none d-lg-block `}>
            {languages
              .filter((l) => lng !== l)
              .map((l, index) => {
                return (
                  <span
                    key={l}
                    className=" w-100 container"
                    style={{ fontSize: "14px" }}
                  >
                    {index > 0 && " or "}
                    <Link
                      id="language"
                      className="   text-decoration-none"
                      href={`/${l}`}
                    >
                      {lng == "ar" ? "English" : "العربية"}
                    </Link>
                  </span>
                );
              })}
          </div>
        </Container>
      </Nav_bar>
    </>
  );
};
