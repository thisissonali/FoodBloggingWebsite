import React from 'react'
import "../src/Footer.css";
import Websitelogo from "./assets/Websitelogo.svg";
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineCopyright } from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <img src={Websitelogo} />
      </div>
      <div
        className="footer-contact"
        style={{ color: "#0E2368", fontWeight: "bolder", fontSize: "20px" }}
      >
        Contact Us
        <p className="footer-para">
          Lorem ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
          <br />
          <br />
          example2020@gmail.com <br />
          <br />
          (904) 443-0343
        </p>
      </div>
      <div
        className="footer-more"
        style={{ color: "#0E2368", fontWeight: "bolder", fontSize: "20px" }}
      >
        More
        <p className="para-more">About Us</p>
        <p className="para-more">Products</p>
        <p className="para-more">Career</p>
        <p className="para-more">Contact Us</p>
      </div>
      <div
        className="footer-social"
        style={{ color: "#0E2368", fontWeight: "bolder", fontSize: "20px" }}
      >
        Social Links
        <p className="iconss">
          <AiOutlineInstagram className="iconsocial" />
          <AiOutlineTwitter className="iconsocial" />
          <BiLogoFacebook className="iconsocial" />
      <p className='copyright'>
        <AiOutlineCopyright /> 2022 Food Truck example
      </p>
        </p>
      </div>
    </div>
  );
}
export default Footer
