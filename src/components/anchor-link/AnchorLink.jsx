import React, { useState, useEffect } from 'react';

const AnchorLink = ({
  className = '',
  elementToScrollId,
  text = '',
  onClick,
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector('.header');
    setHeaderHeight(headerElement.clientHeight);
  }, []);

  const scrollToElement = (evt) => {
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

  const handleClick = (evt) => {
    scrollToElement(evt);

    if (onClick) {
      onClick();
    }
  };

  return (
    <a className={className} href={elementToScrollId} onClick={handleClick}>
      {text}
    </a>
  );
};

export default AnchorLink;
