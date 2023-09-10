import React from 'react';
import './ContactUsPage.css'; // Import your CSS file for styling

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
           <h1 className="page-title">Contact Us</h1>
      <div className="container">
     
        <div className="contact-content">
          <div className="contact-form">
            <h2 className="form-title">Send us a message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you have any questions or need assistance, please don't hesitate to contact us. Our team is here to help you.</p>
            <p>
              <strong>Email:</strong> contact@mentalhealthcenter.com<br />
              <strong>Phone:</strong> +1 (123) 456-7890<br />
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
