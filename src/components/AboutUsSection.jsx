import React from 'react';
import './AboutUsSection.css'; // Import your CSS file for styling
import img from "../Assets/2.png"
const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p>
              At our mental health center, we are dedicated to promoting mental well-being
              and providing support to individuals seeking help. With a team of experienced
              professionals, we offer a range of services and resources to empower our
              community to live healthier and happier lives.
            </p>
            <p>
              Our mission is to break the stigma surrounding mental health and create a
              safe and welcoming environment for anyone seeking assistance. We believe
              that everyone deserves access to high-quality mental health care, and we are
              committed to making a positive impact on the lives of those we serve.
            </p>
          </div>
          <div className="about-image">
            <img src={img} alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
