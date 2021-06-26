import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ mix = "", width = 0 }) => {
  return (
    <div className={`progress-bar ${mix}`}>
      <span
        className="progress-bar__indicator"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;
