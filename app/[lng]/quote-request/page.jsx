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
    <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
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
            <label htmlFor="company" className="form-label">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`form-control ${errors.company ? 'is-invalid' : ''}`}
            />
            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
          </div>
    
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
    
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
    
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
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
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
    
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
  }

