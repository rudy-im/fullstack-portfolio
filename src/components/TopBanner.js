import React, { useState, useEffect } from 'react';
import './TopBanner.css';

const TopBanner = () => {
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

  const bannerClass = isWideScreen ? 'side-banner' : `top-banner${isScrolled ? ' scrolled' : ''}`;

  return (
    <div className={bannerClass}>
      <p>top banner</p>
    </div>
  );
};

export default TopBanner;