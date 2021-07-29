import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./style.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(1);
  const length = slides.length;

  useEffect(() => {
    fetch("http://localhost:5000/videos/g")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="slid-container">
                <div>
                  <video
                    width="450"
                    muted
                    onMouseOver={(event) => event.target.play()}
                    onMouseOut={(event) => event.target.pause()}
                  >
                    <source src={slide.video} index={index} type="video/mp4" />
                  </video>
                  <h1> {index} </h1>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
