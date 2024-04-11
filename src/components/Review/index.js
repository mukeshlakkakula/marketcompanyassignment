import React from "react";
import "./index.css";
const Review = () => {
  const ReviewView = (
    <div className="reviewouterContainer">
      <div className="reviewineerContainer">
        <div>
          <img
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712743527/R3JvdXBfMl9ra2VmZWY=/grid_landscape"
            alt="img"
          />
        </div>
        <span>
          KaroAbhayas made NEET prep a breeze! Their concise study materials and
          interactive sessions really helped me grasp difficult concepts. Plus,
          their mock tests were spot-on for exam readiness. Highly recommended!"
        </span>
        <h1>- Priya</h1>
      </div>
      <div className="reviewineerContainer">
        <div>
          <img
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712743527/R3JvdXBfMl9ra2VmZWY=/grid_landscape"
            alt="img"
          />
        </div>
        <p>
          I owe my NEET success to KaroAbhayas! Their expert tutors guided me
          through every step, and the personalized attention I received truly
          made a difference. Thanks, KaroAbhayas!
        </p>
        <h1>- Rahul</h1>
      </div>
      <div className="reviewineerContainer">
        <div>
          <img
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712743527/R3JvdXBfMl9ra2VmZWY=/grid_landscape"
            alt="img"
          />
        </div>
        <p>
          KaroAbhayas exceeded my expectations! Their easy-to-follow study plan
          and comprehensive resources were instrumental in boosting my
          confidence for the NEET exam. Definitely worth every penny{" "}
        </p>
        <h1>- Aarav</h1>
      </div>
      <div className="reviewineerContainer">
        <div>
          <img
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712743527/R3JvdXBfMl9ra2VmZWY=/grid_landscape"
            alt="img"
          />
        </div>
        <p>
          KaroAbhayas provided the support I needed to crack NEET! Their
          flexible learning options and responsive customer service team ensured
          I never felt alone in my preparation. Thank you, KaroAbhayas{" "}
        </p>
        <h1>- Nisha</h1>
      </div>
      <div className="reviewineerContainer">
        <div>
          <img
            src="https://res-console.cloudinary.com/dnjp2exao/thumbnails/v1/image/upload/v1712743527/R3JvdXBfMl9ra2VmZWY=/grid_landscape"
            alt="img"
          />
        </div>
        <p>
          Thanks to KaroAbhayas, I aced my NEET exam! Their efficient study
          materials and regular progress tracking kept me motivated throughout
          my preparation journey. Highly recommend their services to all NEET
          aspirants
        </p>
        <h1>-Kriti</h1>
      </div>
    </div>
  );
  return <div>{ReviewView}</div>;
};

export default Review;
