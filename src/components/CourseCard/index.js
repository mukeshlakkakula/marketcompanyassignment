import React from "react";
import "./index.css";
const CourseCard = () => {
  const CourseCardView = (
    <div>
      <div className="courseCardinnerContainer">
        <div>
          <img
            className="imgCourse"
            src="https://i.pinimg.com/564x/09/c9/73/09c97322a47b7acb63570ef8f370b303.jpg"
            alt="courseImg"
          />
        </div>
        <div className="courseInnerDivs">
          <div>
            <h5>Objective NCERT at Your Fingertips</h5>
            <p>
              Description: This book provides concise summaries and important
              questions from NCERT textbooks, helping students revise key
              concepts quickly.
            </p>
          </div>
          <div>
            <h5>₹800</h5>
            <button type="button" className="btn-dark">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="courseCardinnerContainer">
        <div>
          <img
            className="imgCourse"
            src="https://i.pinimg.com/564x/09/c9/73/09c97322a47b7acb63570ef8f370b303.jpg"
            alt="courseImg"
          />
        </div>
        <div className="courseInnerDivs">
          <div>
            <h5>NEET Online Test Series</h5>
            <p>
              A series of full-length mock tests designed to simulate the NEET
              exam environment. It helps students assess their preparation level
              and identify areas for improvement
            </p>
          </div>
          <div>
            <h5>₹3000</h5>
            <button type="button" className="btn-dark">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="courseCardinnerContainer">
        <div>
          <img
            className="imgCourse"
            src="https://i.pinimg.com/564x/09/c9/73/09c97322a47b7acb63570ef8f370b303.jpg"
            alt="courseImg"
          />
        </div>
        <div className="courseInnerDivs">
          <div>
            <h5>Objective Physics for NEET by DC Pandey</h5>
            <p>
              This book offers comprehensive coverage of physics topics relevant
              to the NEET exam, along with ample practice questions to reinforce
              learning.
            </p>
          </div>
          <div>
            <h5>₹800</h5>
            <button type="button" className="btn-dark">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="courseCardinnerContainer">
        <div>
          <img
            className="imgCourse"
            src="https://i.pinimg.com/564x/09/c9/73/09c97322a47b7acb63570ef8f370b303.jpg"
            alt="courseImg"
          />
        </div>
        <div className="courseInnerDivs">
          <div>
            <h5>NEET Crash Course</h5>
            <p>
              An intensive online course covering the entire NEET syllabus in a
              condensed timeframe, aimed at last-minute revision and exam
              preparation
            </p>
          </div>
          <div>
            <h5>₹10,000</h5>
            <button type="button" className="btn-dark">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="courseCardinnerContainer">
        <div>
          <img
            className="imgCourse"
            src="https://i.pinimg.com/564x/09/c9/73/09c97322a47b7acb63570ef8f370b303.jpg"
            alt="courseImg"
          />
        </div>
        <div className="courseInnerDivs">
          <div>
            <h5>NEET Video Lectures</h5>
            <p>
              Recorded video lectures delivered by experienced educators,
              covering NEET syllabus topics in an engaging and comprehensive
              manner.
            </p>
          </div>
          <div>
            <h5>₹ 20,000 </h5>
            <button type="button" className="btn-dark">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return <div className="courseFullContainer">{CourseCardView}</div>;
};

export default CourseCard;
