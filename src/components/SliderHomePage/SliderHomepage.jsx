import React from "react";
import "./SliderHomepage.css";
import colorSneaker from "../../assets/images/ColoredSneaker.png";
import sliderThumb3 from "../../assets/images/sliderThumb3.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

const SliderHomepage = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="textBox">
          <p className="above-heading-text">Women's Originals</p>
          <h2>
            Falcon Sneaker
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam
            phasellus vestibulum lorem.
          </p>
          <a href="#">Shop Now</a>
        </div>
        <div className="imgBox">
          <img src={colorSneaker} alt="sneaker" className="sneakers" />
        </div>
      </div>

      <ul className="thumb">
        <li>
          <img src={sliderThumb3} alt="" />
        </li>
        <li>
          <img src={sliderThumb3} alt="" />
        </li>
        <li>
          <img src={sliderThumb3} alt="" />
        </li>
      </ul>

      <ul className="sci">
        <li>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SliderHomepage;
