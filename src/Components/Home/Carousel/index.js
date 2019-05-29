import "./Carousel.scss";
import React from "react";

import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Carousel = props => {
  return (
    <div
      id="myCarousel"
      className="carousel slide pointer-event"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="" />
        <li data-target="#myCarousel" data-slide-to="1" className="" />
        <li data-target="#myCarousel" data-slide-to="2" className="active" />
      </ol>
      <div className="carousel-inner">
        <First />
        <Second />
        <Third />
      </div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
