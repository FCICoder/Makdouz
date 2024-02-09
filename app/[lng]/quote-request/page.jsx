"use client";
import React, { useState } from "react";

export default function Page({ params: { lng } }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validationErrors = validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  const validateField = (name, value) => {
    let fieldErrors = {};

    switch (name) {
      case "name":
        if (!value.trim()) {
          fieldErrors.name = "Name is required";
        }
        break;
      case "company":
        if (!value.trim()) {
          fieldErrors.company = "Company name is required";
        }
        break;
      case "email":
        if (!value.trim()) {
          fieldErrors.email = "Email is required";
        } else if (!isValidEmail(value)) {
          fieldErrors.email = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!value.trim()) {
          fieldErrors.phone = "Phone number is required";
        }
        break;
      case "country":
        if (!value.trim()) {
          fieldErrors.country = "Country is required";
        }
        break;
      default:
        break;
    }

    return fieldErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully");
          } else {
            console.error("Failed to submit form");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = (data) => {
    let formErrors = {};

    Object.keys(data).forEach((key) => {
      const fieldErrors = validateField(key, data[key]);
      if (Object.keys(fieldErrors).length > 0) {
        formErrors = { ...formErrors, ...fieldErrors };
      }
    });

    return formErrors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div className="container mt-5" id="quoter">
        <h3>{lng === "en" ? "Quote Request Form" : "نموذج طلب كمية"}</h3>
        <p>
          {lng === "en" ? "Fields marked with an" : "الحقول المحددة ب"}{" "}
          <span className="ms-1 me-1 text-danger">*</span>{" "}
          {lng === "en" ? "are required" : "مطلوبة"}
        </p>
      </div>
      <div className="container-quote">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/fs/mssssrgngbgg"
          method="POST"
          target="_blank"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {lng === "en" ? "Name" : "الاسم"}{" "}
              <span className="ms-1 me-1 text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="true"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              {lng === "en" ? "Company" : "الشركة"}{" "}
              <span className="ms-1 me-1 text-danger">*</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="true"
              value={formData.company}
              onChange={handleChange}
              className={`form-control ${errors.company ? "is-invalid" : ""}`}
            />
            {errors.company && (
              <div className="invalid-feedback">{errors.company}</div>
            )}
          </div>

          <div className="d-md-flex w-100  " id="specs">
            <div
              className="mb-3 w-50 "
              style={
                lng === "en" ? { paddingRight: "5%" } : { paddingLeft: "5%" }
              }
            >
              <label htmlFor="email" className="form-label ">
                {lng === "en" ? "Email" : "البريد الالكترونى"}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="true"
                value={formData.email}
                onChange={handleChange}
                className={`form-control   ${errors.email ? "is-invalid" : ""}`}
                style={{ width: "100%" }}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3 w-50">
              <label htmlFor="phone" className="form-label">
                {lng === "en" ? "Phone" : "رقم الهاتف"}{" "}
                <span className="ms-1 me-1 text-danger">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="true"
                value={formData.phone}
                onChange={handleChange}
                style={{ width: "85%" }}
                className={` form-control ${errors.phone ? "is-invalid" : ""}`}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              {lng === "en" ? "Country" : "البلد"}{" "}
              <span className="ms-1 me-1 text-danger">*</span>
            </label>
            <input
              type="text"
              name="country"
              id="country"
              autoComplete="true"
              value={formData.country}
              onChange={handleChange}
              className={`form-control ${errors.country ? "is-invalid" : ""}`}
            />
            {errors.country && (
              <div className="invalid-feedback">{errors.country}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              {lng === "en"
                ? "Products That You are Interested *"
                : "منتجات تهمك"}{" "}
              <span className="ms-1 me-1 text-danger">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              autoComplete="true"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-dark rounded-0 text-uppercase"
            disabled={Object.keys(errors).length > 0}
          >
            {lng === "en" ? "Submit" : "ارسال"}
          </button>
        </form>
      </div>
    </>
  );
}
