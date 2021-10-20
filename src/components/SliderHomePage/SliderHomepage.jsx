import React from "react";
import SliderCSS from "./SliderHomepage.module.css";
import colorSneaker from "../../assets/images/ColoredSneaker.png";
import sliderThumb3 from "../../assets/images/sliderThumb3.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

const SliderHomepage = () => {
  return (
    <div className={SliderCSS.container}>
      <div className={SliderCSS.content}>
        <div className={SliderCSS.textBox}>
          <p className={SliderCSS.aboveHeadingText}>Women's Originals</p>
          <h2>Falcon Sneaker</h2>
          <p className={SliderCSS.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam
            phasellus vestibulum lorem.
          </p>
          <a href="#">Shop Now</a>
        </div>

        <div className={SliderCSS.imgBox}>
          <img
            src={colorSneaker}
            alt="sneaker"
            className={SliderCSS.sneakers}
          />
        </div>
      </div>

      <ul className={SliderCSS.thumb}>
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

      <ul className={SliderCSS.sci}>
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
