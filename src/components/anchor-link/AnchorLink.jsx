import React, { useState, useEffect } from 'react';

const AnchorLink = ({ mix = '', elementToScrollId, text = '' }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector('.header');
    setHeaderHeight(headerElement.clientHeight);
  }, []);

  const handleClick = (evt) => {
    evt.preventDefault();

    const elementToScroll = document.querySelector(`#${elementToScrollId}`);

    if (!elementToScroll) {
      return;
    }

    const elementToScrollOffset = elementToScroll.offsetTop;

    window.scrollTo({
      top: elementToScrollOffset - headerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      className={`anchor-link ${mix}`}
      href={elementToScrollId}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default AnchorLink;
