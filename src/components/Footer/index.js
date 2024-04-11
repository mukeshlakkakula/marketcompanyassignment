import React from "react";
import "./index.css";
const Footer = () => {
  const footerView = (
    <div className="footerfullContainer">
      <h5>
        KARO ABHAYAAS <br />
        112, ELECTRONIC CITY
        <br />
        BANGALORE, INDIA
      </h5>
      <div>
        <h5>
          SOME TEXT ABOUT SOMETHING <br />
          AND THEN SOME OTHER THING
        </h5>
        <div className="buttonContainer">
          <button type="button" className="btnContact">
            CONTACT US
          </button>
          <button type="button" className="btnContact">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
  return <div>{footerView}</div>;
};

export default Footer;
