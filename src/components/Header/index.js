import { Link } from "react-router-dom";
import { useCourse } from "../CourseContext";
import { FaShoppingCart } from "react-icons/fa";
import "./index.css";
import { useEffect, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";

const Header = (props) => {
  const { activeRoute, setActiveRoute } = useCourse();
  const [activeModal, setActiveModal] = useState(false);

  const modalVal = (
    <div className="modal_content">
      <span>Success! We'll call you back shortly.</span>
      <span onClick={() => setActiveModal(false)}>&times;</span>
    </div>
  );

  useEffect(() => {
    setActiveModal(false);
  }, [activeRoute]);

  const Showmodal = activeModal ? modalVal : "";
  return (
    <div className="heaaderWithShowModal">
      <div className="headerContainer">
        <div>
          <Link
            to="/"
            onClick={() => {
              setActiveRoute("home");
            }}
          >
            <button className="karoLogo">Karo Abhayaas</button>
          </Link>
        </div>

        <div className="headerInsideContainer">
          <button
            onClick={() => setActiveModal(true)}
            id="openModalBtn"
            className="reqBtn"
            value=" JOIN US"
          >
            JOIN US
          </button>
          <Link
            to="/classes"
            onClick={() => {
              setActiveRoute("classes");
            }}
          >
            <button
              className={
                activeRoute === "classes" ? "activeBtn" : "notActiveBtn"
              }
              value="classes"
            >
              Classes
            </button>
          </Link>{" "}
          <Link
            to="/products"
            onClick={() => {
              setActiveRoute("products");
            }}
          >
            <button
              className={
                activeRoute === "products" ? "activeBtn" : "notActiveBtn"
              }
              value="products"
            >
              Products
            </button>
          </Link>
          <Link
            to="/aboutus"
            onClick={() => {
              setActiveRoute("aboutus");
            }}
          >
            <button
              className={
                activeRoute === "aboutus" ? "activeBtn" : "notActiveBtn"
              }
              value="aboutus"
            >
              About us
            </button>
          </Link>
          <Link
            to="/register"
            onClick={() => {
              setActiveRoute("register");
            }}
          >
            <button
              className={
                activeRoute === "register" ? "activeBtn" : "notActiveBtn"
              }
              value="register"
            >
               <IoPersonSharp />
            </button>
          </Link>
          <Link
            to="/addedProducts"
            onClick={() => {
              setActiveRoute("addedProducts");
            }}
          >
            <button
              className={
                activeRoute === "addedProducts" ? "activeBtn" : "notActiveBtn"
              }
              value="addedProducts"
            >
              <FaShoppingCart />
            </button>
          </Link>
        </div>
      </div>
      {Showmodal}
    </div>
  );
};

export default Header;
