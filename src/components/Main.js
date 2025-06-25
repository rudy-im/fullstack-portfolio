import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
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

  const mainClass = isWideScreen ? `side-banner-main` : `top-banner-main${isScrolled ? ' scrolled' : ''}`;

  return (
    <div className={mainClass}>
      {Array.from({ length: 100 }).map((_, i) => (
	    <div key={i}>test {i}</div>
	  ))}
    </div>
  );
};

export default Main;