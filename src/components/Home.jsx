import React from 'react';
import "./Home.css";
import img from "../Assets/3.png"
const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-left">
            <h2 className="home-title">Welcome to Mental Health</h2>
            <p className="home-info">
              Discover resources and information to support your mental well-being.
            </p>
            <button className="explore-button">Explore More</button>
          </div>
          <div className="home-right">
            {/* Add your full-width image here */}
            <img src={img} alt="Mental Health" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
