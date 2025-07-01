import React, { useState, useEffect } from 'react';
import './Banner.css';
import './ProfilePhoto.css';
import profileImage from './profile.jpg';

const Banner = () => {
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

  const bannerClass = isLandscape ? `banner side` : `banner top${isScrolled ? ' scrolled' : ''}`;
  const profileWrapperClass = 'profile-wrapper ' + (isLandscape ? 'landscape' : `portrait${isScrolled ? ' scrolled' : ''}`);
  const bannerTitleClass = 'banner-title ' + (isLandscape ? 'side' : 'top');

  return (
    <div className={bannerClass}>
	  <div className={profileWrapperClass}>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className={bannerTitleClass}>
	    <div className="name">Rudy <b>Im</b></div>
	    <div>Fullstack Developer</div>
	    <button>Download Resume</button>
	  </div>
    </div>
  );
};

export default Banner;