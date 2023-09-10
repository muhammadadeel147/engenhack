import React from 'react';
import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">How We Help</h1>
          <div className="step-container">
            <div className="step">
              <div className="step-icon">Step 1</div>
              <h3 className="step-title">Assessment</h3>
              <p className="step-description">
                We start by assessing your mental health to understand your unique needs.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">Step 2</div>
              <h3 className="step-title">Support</h3>
              <p className="step-description">
                Our dedicated team provides you with the support you need.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">Step 3</div>
              <h3 className="step-title">Therapy</h3>
              <p className="step-description">
                You'll have access to various therapy options tailored to you.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">Step 4</div>
              <h3 className="step-title">Recovery</h3>
              <p className="step-description">
                Our goal is to help you achieve mental well-being and recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
