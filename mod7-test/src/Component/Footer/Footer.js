import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setemail] = useState("");

  const handleSubmit = () => {
    if(email == " "){
      alert("Enter your mail ID");
    }
    fetch( 
      "https://module7-98acc-default-rtdb.asia-southeast1.firebasedatabase.app/subscribe.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setemail("");
      });
  };
  return (
    <div className="footer-container">
      <div className="footer-heading">
        <div className="footer-name">
          <h3>Acciojob</h3>
        </div>
        <div className="footer-social-icons">
          <div className="facebook">
            <img src={require("../../Assets/facebook.png")} />
          </div>
          <div className="instagram">
            <img src={require("../../Assets/Instagram.png")} />
          </div>
          <div className="twitter">
            <img src={require("../../Assets/twitter.png")} />
          </div>
        </div>
      </div>
      <div className="border-bottom" />
      <div className="footer-items">
        <div className="companyInfo">
          <h5>Company Info</h5>
          <p className="footer-links">About us</p>
          <p className="footer-links">Career</p>
          <p className="footer-links">We are hiring</p>
          <p className="footer-links">Blogs</p>
        </div>
        <div className="legal">
          <h5>Legal</h5>
          <p className="footer-links">About us</p>
          <p className="footer-links">Career</p>
          <p className="footer-links">We are hiring</p>
          <p className="footer-links">Blogs</p>
        </div>
        <div className="features">
          <h5>Features</h5>
          <p className="footer-links">Business Marketing</p>
          <p className="footer-links">User Analytic</p>
          <p className="footer-links">Live Chat</p>
          <p className="footer-links">Unlimited Support</p>
        </div>
        <div className="resources">
          <h5>Resources</h5>
          <p className="footer-links">IOS & Android</p>
          <p className="footer-links">Watch a Demo</p>
          <p className="footer-links">Customers</p>
          <p className="footer-links">API</p>
        </div>
        <div className="getintouch">
          <h5>Get In Touch</h5>
          <input
            type={"text"}
            value={email}
            placeholder={"Your Email"}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Subscribe</button>
        </div>
      </div>
      <div className="made-love"></div>
    </div>
  );
};

export default Footer;
