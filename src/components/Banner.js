import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > window.innerHeight);
    };

    const handleScroll = () => {
      if (!isWideScreen) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isWideScreen]);

  const bannerClass = isWideScreen ? `side-banner` : `top-banner${isScrolled ? ' scrolled' : ''}`;

  return (
    <div className={bannerClass}>
      <p>banner</p>
    </div>
  );
};

export default Banner;