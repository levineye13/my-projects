import React, { useState, useEffect } from 'react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState({
    percents: 0,
    pixels: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const pixelsProgress = window.pageYOffset;
      const percentProgress = (pixelsProgress / totalHeight) * 100;

      setProgress({
        pixels: pixelsProgress,
        percents: percentProgress,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export { useScrollProgress };
