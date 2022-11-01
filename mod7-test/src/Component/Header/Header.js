import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner-container">
        <div className="header-texts">
          <div className="header-first">
            <h5>SUMMER 2022</h5>
          </div>
          <div className="new-collection">
            <h1>New Collection</h1>
          </div>
          <div className="header-inner-text">
            <h4>
              We know how large objects will act, <br /> but things on a small
              scale.
            </h4>
          </div>
          <div className="header-button">
            <button>Shop Now</button>
          </div>
        </div>
        <div className="header-image">
          <div className="image">
            <img src={require("../../Assets/technology 1.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
