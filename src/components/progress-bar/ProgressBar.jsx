import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ mix = '', progress = 0 }) => {
  return (
    <div className={`progress-bar ${mix}`}>
      <span
        className="progress-bar__indicator"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
