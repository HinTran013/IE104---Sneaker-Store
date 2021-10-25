import React from "react";
import DealStyle from "./SliderDealOfTheWeek.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SliderDealOfTheWeek = () => {
  return (
    <>
      <div className={`container-fluid ${DealStyle.container}`}>
        <div className={`${DealStyle.titleContainer}`}>
          <h2>Deal Of The Week</h2>
        </div>

        <div className={`row`}>
          <div className={`col ${DealStyle.sideTextContainer}`}>
            <p className={`${DealStyle.sideAboveHeaderText} row`}>
              Hot Deal Week
            </p>
            <h3 className={`${DealStyle.sideHeader} row`}>
              Crazy Byw Lvl X Pw
            </h3>
            <div className={`${DealStyle.priceContainer} row`}>
              <div className={`${DealStyle.oldPrice} col`}>$250</div>
              <div className={`${DealStyle.newPrice} col`}>$200</div>
            </div>
            <div className={`${DealStyle.soldAvailableContainer} row`}>
              <div className={`${DealStyle.soldText} col`}>
                Already sold: 19
              </div>
              <div className={`${DealStyle.AvailableText} col`}>
                Available: 23
              </div>
            </div>

            <progress value="19" max="42"></progress>

            <p className={`${DealStyle.isExpireText}`}>Still Available</p>

            <a className={`${DealStyle.DealBtn}`}>Shop now</a>
          </div>

          <div className={`col ${DealStyle.sideImageContainer}`}></div>
        </div>
      </div>
    </>
  );
};

export default SliderDealOfTheWeek;
