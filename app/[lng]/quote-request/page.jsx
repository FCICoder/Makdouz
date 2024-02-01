'use client'
import React, { useState } from "react";

export default function Page({ params: { lng } }) {
    const [formData, setFormData] = useState({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length === 0) {
        console.log('Form submitted:', formData);
      } else {
        setErrors(validationErrors);
      }
    };
  
    const validateForm = (data) => {
      let errors = {};
  
      if (!data.name.trim()) {
        errors.name = "Name is required";
      }
  
      if (!data.company.trim()) {
        errors.company = "Company name is required";
      }
  
      if (!data.email.trim()) {
        errors.email = "Email is required";
      } else if (!isValidEmail(data.email)) {
        errors.email = "Please enter a valid email address";
      }
  
      if (!data.phone.trim()) {
        errors.phone = "Phone number is required";
      }
  
      if (!data.country.trim()) {
        errors.country = "Country is required";
      }
  
      return errors;
    };
  
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    return <>
    <div className="container" id="quoter">
      <h3>Quote Request Form</h3>
      <p>Fields marked with an <span className="ms-1 me-1 text-danger mt-4 ">*</span> are required</p>
    </div>
    <div className="container-quote">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name <span className="ms-1 me-1 text-danger">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
    
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company <span className="ms-1 me-1 text-danger">*</span></label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`form-control ${errors.company ? 'is-invalid' : ''}`}
            />
            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
          </div>
    
          <div className="d-flex w-100 " >
          <div className="mb-3 w-50 " style={{paddingRight:"5%"}}>
            <label htmlFor="email" className="form-label ">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control   ${errors.email ? 'is-invalid' : ''}`}
              style={{width:"100%"}}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
    
          <div className="mb-3 w-50">
            <label htmlFor="phone" className="form-label">Phone <span className="ms-1 me-1 text-danger">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{width:"85%"}}
              className={` form-control ${errors.phone ? 'is-invalid' : ''}`}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          </div>
    
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country <span className="ms-1 me-1 text-danger">*</span></label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`form-control ${errors.country ? 'is-invalid' : ''}`}
            />
            {errors.country && <div className="invalid-feedback">{errors.country}</div>}
          </div>
    
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message <span className="ms-1 me-1 text-danger">*</span></label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
            ></textarea>
          </div>
    
          <button type="submit" className="btn btn-dark rounded-0  text-uppercase">Submit </button>
        </form>
        </div>
        </>
  }

