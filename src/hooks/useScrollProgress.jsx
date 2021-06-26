import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const percentProgress = (window.pageYOffset / totalHeight) * 100;
      setProgress(percentProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

export { useScrollProgress };
