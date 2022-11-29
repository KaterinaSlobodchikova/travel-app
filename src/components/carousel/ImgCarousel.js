import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ImgCarouselStyles.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="borabora" />
        </div>
        <div>
          <img src={BoraBora2} alt="borabora1" />
        </div>
        <div>
          <img src={Maldives} alt="maldives" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
