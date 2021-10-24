import React from "react";
import SliderHomepage from "../components/SliderHomePage/SliderHomepage";
import BannerFirst from '../assets/images/banner/banner-homepage-1.jpg'
import BannerSecond from '../assets/images/banner/banner-homepage-2.jpg'
import SneakerFirst from '../assets/images/banner/sneaker-homepage-1.jpg'
import SneakerSecond from '../assets/images/banner/sneaker-homepage-2.jpg'
import style from '../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <>
      <SliderHomepage />

      {/* slider Best Seller Sneaker here */}
      {/* ... */}

      {/* the first collection item */}
      <div className={style.collectionContainer}>
        <div className={style.itemSneaker}>
          <a className={style.itemLink} href='#'>
            <img className={style.itemImgSneaker} src={SneakerFirst} alt='sneaker'/>
            <div className={style.sneakerText}>
              <h5>Running Shoes</h5>
              <h2>Nike Just Do It</h2>
            </div>
          </a>
        </div>

        <div className={style.itemBanner}>
          <a className={style.itemLink} href='#'>
            <img className={style.itemImgBanner} src={BannerFirst} alt='banner'/>
          </a>

          <div className={style.bannerText}>
            <h2>
            The Benefits
            <br/>
            Of Running
            </h2>
            <h5>Season Off 30-10%</h5>
            <a className={style.bannerBtn} href='#'>More Info</a>
          </div>
        </div>
      </div>

      {/* the second collection item */}
      <div className={style.collectionContainer}>
        <div className={style.itemBanner}>
          <a className={style.itemLink} href='#'>
            <img className={style.itemImgBanner} src={BannerSecond} alt='banner' />
          </a>

          <div className={`${style.bannerText} ${style.bannerTextRight}`}>
            <h5>New Arrivals</h5>
            <h2>
              Women Hoodies &
              <br />
              Sweatshirts
            </h2>
            <a className={style.bannerBtn} href='#'>More Info</a>
          </div>
        </div>

        <div className={style.itemSneaker}>
          <a className={style.itemLink} href='#'>
            <img className={style.itemImgSneaker} src={SneakerSecond} alt='sneaker' />
            <div className={style.sneakerText}>
              <h5>Best Sellers</h5>
              <h2>Adidas Shoes</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
