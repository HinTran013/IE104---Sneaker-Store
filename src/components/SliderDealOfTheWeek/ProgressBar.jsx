import React from "react";
import Style from "./ProgressBar.module.css";

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={`${Style.progress}`}>
      <div className={`${Style.progressDone}`} style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
