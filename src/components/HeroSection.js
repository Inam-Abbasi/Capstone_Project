import React from "react";
import "../components/styles/HeroSection.css";
import { NavLink } from "react-router-dom";
import HeroImage from "../components/assets/gourmet.jpeg";

const HeroSection = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-section-container">
        <div className="section-left">
          <h1>Little Lemon</h1>
          <h2>Paris</h2>
          <p>
            Warm hospitality, traditional Mediterranean cuisine, and a fresh,
            modern twist await you at our family restaurant..
          </p>
          <NavLink to="/reservations">
            <button className="btn">Reserve a Table</button>
          </NavLink>
        </div>
        <div className="section-right">
          <div className="image-box">
            <img src={HeroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
