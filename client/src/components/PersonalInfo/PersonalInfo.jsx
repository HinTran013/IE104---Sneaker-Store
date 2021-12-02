import React from "react";
import LeftSideInfo from "./LeftSideInfo";
import MainPartInfo from "./MainPartInfo";
import style from './PersonalInfo.module.css';

function PersonalInfo() {
    return(
        <div style={{padding: '100px 200px', background: '#f8f4f4'}} className={style.row}>
            <LeftSideInfo />
            <MainPartInfo />
        </div>
    );
}

export default PersonalInfo;