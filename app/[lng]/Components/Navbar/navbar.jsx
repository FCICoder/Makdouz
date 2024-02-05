"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { languages } from "../../../i18n/settings";
if (typeof document !== 'undefined') {
  import('bootstrap/dist/js/bootstrap.bundle.js')
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Nav_bar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../../../public/cropped-3-1.png'
import Image from "next/image";
export const Navbar = ({ lng }) => {
  const router = usePathname();
  // function select(e) {
  //   if (window.location.search !== e.target.search) {
  //     window.location.href = e.target.href;
  //   }
  // }
  return (
    <>
      {/* <section>
        <nav className={`navbar navbar-expand-md navbar-light shadow ${styles.nav}`}>
          <div className="container">
            <div className={`${styles.image}`}>
              <Link className="navbar-brand  " href={`/${lng}`}>
                <h1 className="text-uppercase">Makdous</h1>
              </Link>
            </div>
            <div className={`${styles.language} d-block d-md-none `}>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l} className=" w-100 container" style={{ fontSize: '14px' }}>
                      {index > 0 && " or "}
                      <Link className="text-dark    text-decoration-none" href={`/${l}`}>{lng == 'ar' ? "English" : "العربية"}</Link>
                    </span>
                  );
                })}
            </div> */}

            {/* <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            {/* <div className="   collapse navbar-collapse" id="collapsibleNavId">
              <div className=" w-100 d-flex justify-content-center">
                <ul className={` navbar-nav  mt-2 mt-lg-0 translate-50`}>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}` ? `${styles.active}` : ""
                        } ${styles.nav_link}  `}
                      href={`/${lng}`}
                    >
                      {lng == "en" ? "Home" : "الصفحة الرئيسيه"}
                    </Link>
                  </li>
                  <li className="nav-item dropdown" >
                    <Link
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {(lng == 'en') ? 'Categories' : ' الفئات'}
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <Link
                        className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Solevants" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Solevants' : 'المذيبات '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Polymers" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Polymers' : 'البوليمرات '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Chemical Additives and Processing Aids" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Chemical Additives and Processing Aids' : 'المضافات الكيميائية ومساعدات المعالجة '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Preservatives and Chemical Processing" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Preservatives and Chemical Processing' : 'المواد الحافظة والمعالجة الكيميائية '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Pigments and Fillers" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Pigments and Fillers' : 'الأصباغ والحشو '}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}/about-us` ? `${styles.active}` : ""
                        } ${styles.nav_link}`}
                      href={`/${lng}/about-us`}
                    >
                      {lng == "en" ? "About Us" : "نبذة عنا"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}/careers` ? `${styles.active}` : ""
                        } ${styles.nav_link}`}
                      href={`/${lng}/careers`}
                    >
                      {lng == "en" ? "Careers" : "مهنتنا"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}/quote-request` ? `${styles.active}` : ""
                        } ${styles.nav_link}`}
                      href={`/${lng}/quote-request`}
                    >
                      {lng == "en" ? "quote request" : "تواصل معنا"}
                    </Link>
                  </li>{" "}
                <div className="ms-md-2 mx-0">
                  <div className="d-flex align-itmes-center justify-content-center  h-100 mt-1 mt-md-0 ms-md-0 mx-0">
                   <a
                      href="https://www.facebook.com/onechemic"
                      className="text-decoration-none   mt-auto my-auto "
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook mx-2 fa-xl"></i>
                    </a>
                    <a
                      href="https://twitter.com/onechemic"
                      className="text-decoration-none   mt-auto my-auto"
                      target="_blank"
                    >
                      <i className="fa-brands fa-x-twitter mx-2 fa-xl text-dark"></i>
                    </a>

                  </div>

                </div>

                </ul>

              </div>
            </div> */}
            {/* <div className={`${styles.language} d-none d-md-block `}>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l} className=" w-100 container" style={{ fontSize: '14px' }}>
                      {index > 0 && " or "}
                      <Link className="text-dark    text-decoration-none" href={`/${l}`}>{lng == 'ar' ? "English" : "العربية"}</Link>
                    </span>
                  );
                })}
            </div> */}
          {/* </div>
        </nav>
        </section> */}
        
        <Nav_bar expand="lg" id="Nav_bar" className="bg-body-tertiary">
      <Container>
        <Nav_bar.Brand href="/" id="brand" className="text-uppercase  p-3 " >
          <Image src={img} alt="Makdouz Brand" width={300} height={50} id="image-brand"  />
        </Nav_bar.Brand>
        <Nav_bar.Toggle  id="toggle-button" aria-controls="basic-navbar-nav" />
        <Nav_bar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link className="Nav" href="/">Home</Nav.Link>
            <Nav.Link className="Nav" href="#">Products</Nav.Link>
            <Nav.Link className="Nav" href="quote-request">QuoteRequest</Nav.Link>
            <Nav.Link className="Nav" href="careers">Careers</Nav.Link>
            <Nav.Link className="Nav" href="about-us">Aboutus</Nav.Link>
            <Nav.Link className="Nav" href="https://www.facebook.com/makdouz">
            <i class="fab fa-facebook fs-3"></i>
            </Nav.Link>

          </Nav>
        </Nav_bar.Collapse>
        
      </Container>
    </Nav_bar>
    </>
  );
};
