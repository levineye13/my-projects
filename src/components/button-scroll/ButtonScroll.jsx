import React, { useState, useEffect } from 'react';

import './ButtonScroll.scss';

const ButtonScroll = ({ mix = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timerId = null;

    const handleScroll = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => toggleVisibleButton(), 300);
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVisibleButton = () => {
    if (window.scrollY === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <button
      className={`button-scroll ${mix} ${
        isVisible ? 'button-scroll_visible' : ''
      }`}
      type="button"
      onClick={handleClick}
    />
  );
};

export default ButtonScroll;
