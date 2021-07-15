import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ mix = '', modifier = '', progress = 0 }) => {
  const direction = modifier.includes('progress-bar_type_vertical')
    ? { height: `${progress}%` }
    : { width: `${progress}%` };

  return (
    <div className={`progress-bar ${modifier} ${mix}`}>
      <span className="progress-bar__indicator" style={direction} />
    </div>
  );
};

export default ProgressBar;
