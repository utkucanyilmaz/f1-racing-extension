import React, { useState } from "react";
import arrow from "/icons/chevron-left-solid.svg";

import "./Carousel.css";

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === children.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? children.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children.map((component, index) => (
          <div
            className={`carousel-component ${
              index !== currentIndex ? "zero-w-h" : ""
            }`}
            key={index}
          >
            {component}
          </div>
        ))}
      </div>
      <button
        disabled={currentIndex === 0}
        className={`${
          currentIndex === 0 ? "none" : "block"
        } carousel-button prev`}
        onClick={handlePrev}
      >
        <img src={arrow} alt="Navigate next" />
      </button>
      <button
        disabled={currentIndex === children.length - 1}
        className={`${
          currentIndex === children.length - 1 ? "none" : "block"
        } carousel-button next`}
        onClick={handleNext}
      >
        <img src={arrow} alt="Navigate previous" />
      </button>
    </div>
  );
}

export default Carousel;
