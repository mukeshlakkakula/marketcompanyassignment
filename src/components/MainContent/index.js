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
        showIndicators={false}
        swipeable={false}
        stopOnHover={false}
        showThumbs={false}
        className="carousel "
      >
        <div className="CarouselImages">
          <h4>M.Adarsh</h4>
          <h4>Air 1</h4>
          <h6>Top Scorrer in the NEET 2023</h6>
        </div>

        <div className="CarouselImages">
          <h4>S.Vineeth</h4>
          <h4>Air 2</h4>
          <h6>Top Scorrer in the NEET 2023</h6>
        </div>

        <div className="CarouselImages">
          <h4>B.Akhila</h4>
          <h4>Air 3</h4>
          <h6>Top Scorrer in the NEET 2023</h6>
        </div>
        <div className="CarouselImages">
          <h4>L.Rajesh</h4>
          <h4>Air 4</h4>
          <h6>Top Scorrer in the NEET 2023</h6>
        </div>
        <div className="CarouselImages">
          <h4>I.Anoosha</h4>
          <h4>Air 5</h4>
          <h6>Top Scorrer in the NEET 2023</h6>
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
