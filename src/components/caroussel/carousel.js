import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardItems from "../../assets/logements";
import Vector from "../../assets/Vector.svg";
import "./caroussel.css";

export default function Caroussel() {
  const { id } = useParams();
  const foundItem = cardItems.find((object) => object.id === id);
  const pictures = foundItem.pictures;

  const [current, setCurrent] = useState(0);

  /**
   * If the current slide is the last slide, then go to the first slide, otherwise go to the next
   * slide.
   */
  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  /**
   * If the current slide is the first slide, then set the current slide to the last slide, otherwise
   * set the current slide to the previous slide.
   */
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {/* Showing slider navigation buttons */}
      <button className="vectorPrev">
        <img src={Vector} onClick={prevSlide} alt="fleche" />
      </button>
      <button className="vectorNext">
        <img src={Vector} onClick={nextSlide} alt="fleche" />
      </button>
      {/* Images */}
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
            )}
          </div>
        );
      })}
    </div>
  );
}
