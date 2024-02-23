import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon est votre adresse de quartier incontournable pour une
            cuisine simple et savoureuse, accompagnée de cocktails bien
            préparés. L'ambiance y est décontractée et le menu met en valeur des
            ingrédients locaux avec des plats du jour
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Paris</li>
                <li>Marseille</li>
                <li>Bordeaux</li>
                <li>Toulouse</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>
                  Little Lemon. 22 Rue du Débarcadère; 75017, Paris (France)
                </li>
                <li>Tel: +33189480599</li>
                <li>Email: info@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
