import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    const handleScroll = () => {
      if (!isLandscape) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLandscape]);

  const mainClass = isLandscape ? `main side-banner` : `main top-banner${isScrolled ? ' scrolled' : ''}`;

  return (
    <div className={mainClass}>
	  <div className="section top"></div>
	  <div className="section white">
		<h1>PROFILE</h1>
	  </div>
	  <div className="section"><h1>PROJECT</h1></div>
	  <div className="section white"><h1>TECHNICAL STACK</h1></div>
	  <div className="section dark"><h1>Get in touch!</h1></div>
    </div>
  );
};

export default Main;