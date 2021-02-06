import React from 'react';
import Carousel from "react-bootstrap/Carousel";

// Image assets
import Slide1 from "../../assets/imgs/carousal/slide1.webp";
import Slide2 from "../../assets/imgs/carousal/slide2.webp";
import Slide3 from "../../assets/imgs/carousal/slide3.webp";

// Component Import
import ScrollDown from "../ScrollDown/ScrollDown.component";

// Style
import "./style.css";

const MyCarousel = () => {
 return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
 
      <ScrollDown />
    </div>
 )
}

export default MyCarousel;
