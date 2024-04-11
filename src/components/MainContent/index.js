import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import Review from "../Review";
import Footer from "../Footer";
const MainContent = () => {
  const CarouselView = (
    <div className="imageCoroselContainer p-2">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        swipeable={false}
        stopOnHover={false}
        showThumbs={false}
        className="carousel "
      >
        <div>
          <img
            className="w-100"
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712807095/VW50aXRsZWRfa2R3bmxm/grid_landscape"
            alt="Air1"
          />
        </div>

        <div>
          <img
            className="w-100"
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712807292/VW50aXRsZWRfMV9ncWFncjA=/grid_landscape"
            alt="Air2"
          />
        </div>

        <div>
          <img
            className="w-100"
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712807479/VW50aXRsZWRfMl91bDZ0cnM=/grid_landscape"
            alt="Air3"
          />
        </div>
        <div>
          <img
            className="w-100"
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712807823/VW50aXRsZWRfM19temluN24=/grid_landscape"
            alt="Air4"
          />
        </div>
        <div>
          <img
            className="w-100"
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712807833/VW50aXRsZWRfNF9oeDR5cWk=/grid_landscape"
            alt="Air5"
          />
        </div>
      </Carousel>
    </div>
  );
  return (
    <div className="mainContentFullContainer">
      {CarouselView}
      <h1>Our Top Students</h1>
      <Review />
      <h3>Reviews</h3>
      <Footer />
    </div>
  );
};

export default MainContent;
