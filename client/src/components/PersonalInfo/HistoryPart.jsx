import React from "react";
import style from "./HistoryPart.module.css";

function HistoryPart() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Billing History</h1>
      <hr />
      <p>There is no products that you bought</p>
    </div>
  );
}

export default HistoryPart;
