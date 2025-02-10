import { useState } from "react";
import "../css/Sponsors.css";
import block_chain_logo from "../assets/block_chain_logo.jpeg"

function Sponsors() {
  const logos = [block_chain_logo];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="sponsors-container" id="sponsors">
      <h2 className="sponsors-heading">Our Sponsors</h2>
      <div className="sponsors-slider">
        <button className="slider-btn left" onClick={scrollLeft}>&#10094;</button>
        <div className="sponsors-track">
          {logos.slice(currentIndex, currentIndex + 3).map((logo, index) => (
            <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
          ))}
          {currentIndex >= logos.length - 2 &&
            logos.slice(0, 3 - (logos.length - currentIndex)).map((logo, index) => (
              <img key={`extra-${index}`} src={logo} alt={`Sponsor Extra ${index + 1}`} className="sponsor-logo" />
            ))}
        </div>
        <button className="slider-btn right" onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
}

export default Sponsors;
