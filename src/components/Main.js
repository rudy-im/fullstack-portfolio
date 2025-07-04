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
		I am a motivated developer, at the beginning of my career. Though it doesn’t mean I have little experience with programming. With educational background, I’ve enjoyed developing apps and writing scripts to satisfy my own needs and curiosity.
		<br /><br />
		I'm actively looking for ways to use my skills to help others. I’d love to connect with you!
	  </div>
	  <div className="section"><h1>PROJECT</h1></div>
	  <div className="section white">
	    <h1>TECHNICAL STACK</h1>
		<div class="skill-container">
		  <div class="skill">1</div>
		  <div class="skill">2</div>
		  <div class="skill">3</div>
		  <div class="skill">4</div>
		  <div class="skill">5</div>
	    </div>
	  </div>
	  <div className="section dark"><h1>Get in touch!</h1></div>
    </div>
  );
};

export default Main;