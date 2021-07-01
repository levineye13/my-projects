import React, { useEffect, useState } from 'react';
import { createStars } from '../../utils/utils';
import './Background.scss';

const Background = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = createStars(100, 'background__star');
    setStars(newStars);
  }, []);

  return (
    <div className="background">
      {stars.length > 0 && stars.map((star) => <span {...star} />)}
    </div>
  );
};

export default Background;
