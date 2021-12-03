import React, { useState } from "react";
import HistoryPart from "./HistoryPart";
import LeftSideInfo from "./LeftSideInfo";
import MainPartInfo from "./MainPartInfo";
import style from "./PersonalInfo.module.css";

function PersonalInfo({ bool }) {
  const [account, setAccount] = useState(bool);

  return (
    <div className={style.row}>
      <LeftSideInfo account={account} setAccount={setAccount} />
      {account ? <MainPartInfo /> : <HistoryPart />}
    </div>
  );
}

export default PersonalInfo;
