import React, { useState } from "react";
import SliderCSS from "./SliderHomepage.module.css";
import SliderData from "./SliderHomePageData";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

const SliderHomepage = () => {
  //set state for information of slider
  const [sliderInfo, setSliderImage] = useState({
    img: SliderData[0].image,
    aboveText: SliderData[0].aboveHeadText,
    heading: SliderData[0].heading,
    description: SliderData[0].description,
    btnText: SliderData[0].btnText,
  });

  // callback function when click the thumb and switch the slide
  const switchSlide = (index) => {
    setSliderImage({
      img: SliderData[index].image,
      aboveText: SliderData[index].aboveHeadText,
      heading: SliderData[index].heading,
      description: SliderData[index].description,
      btnText: SliderData[index].btnText,
    });
  };

  return (
    <div className={SliderCSS.container}>
      <div className={SliderCSS.content}>
        <div className={SliderCSS.textBox}>
          <p className={SliderCSS.aboveHeadingText}>{sliderInfo.aboveText}</p>
          <h2>{sliderInfo.heading}</h2>
          <p className={SliderCSS.description}>{sliderInfo.description}</p>
          <a href="#">{sliderInfo.btnText}</a>
        </div>

        <div className={SliderCSS.imgBox}>
          <img
            src={sliderInfo.img}
            alt="sneaker"
            className={SliderCSS.sneakers}
          />
        </div>
      </div>

      <ul className={SliderCSS.thumb}>
        {SliderData.map((currentItem, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                switchSlide(index);
              }}
            >
              <img src={currentItem.image} alt="" />
            </li>
          );
        })}
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
