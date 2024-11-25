import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    contactOwner: "",
    lastContacted: "",
    supportPriority: "",
    preferredLanguage: "",
    productPurchase: "",
    companyName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      jobTitle: "",
      contactOwner: "",
      lastContacted: "",
      supportPriority: "",
      preferredLanguage: "",
      productPurchase: "",
      companyName: "",
    });
    alert("Your Contact created sucessfully...");
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={
              formData.email.length > 0 &&
              !/^\S+@\S+\.\S+$/.test(formData.email)
                ? "invalid"
                : ""
            }
            placeholder="Enter email"
          />
          {formData.email.length > 0 &&
            !/^\S+@\S+\.\S+$/.test(formData.email) && (
              <span className="error-message">Not a valid email address</span>
            )}
        </div>

        <div className="form-group">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your Phone number..."
          />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Enter your Job Title..."
          />
          <label htmlFor="contactOwner">Contact Owner</label>
          <input
            type="text"
            id="contactOwner"
            name="contactOwner"
            required
            value={formData.contactOwner}
            onChange={handleChange}
            placeholder="Enter Contact Owner..."
          />
          <label htmlFor="lastContacted">Last Contacted</label>
          <input
            type="date"
            id="lastContacted"
            name="lastContacted"
            required
            value={formData.lastContacted}
            onChange={handleChange}
            placeholder="mm/dd/yy"
          />
          <label htmlFor="supportPriority">Priority</label>
          <input
            type="text"
            id="supportPriority"
            name="supportPriority"
            required
            value={formData.supportPriority}
            onChange={handleChange}
            placeholder="Enter your Support Priority ..."
          />

          <label htmlFor="preferredLanguage">Lauguage</label>
          <input
            type="text"
            id="preferredLanguage"
            name="preferredLanguage"
            required
            value={formData.preferredLanguage}
            onChange={handleChange}
            placeholder="Select your Lauguage ..."
          />

          <label htmlFor="productPurchase">Product Purchase</label>
          <input
            type="text"
            id="productPurchase"
            name="productPurchase"
            required
            value={formData.productPurchase}
            onChange={handleChange}
            placeholder="Product Pruchase ..."
          />

          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your Company Name..."
          />
        </div>

        {/* Other form fields... */}

        <div className="button-group">
          <button type="submit">Create</button>
          <button type="button">Create and add another</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
