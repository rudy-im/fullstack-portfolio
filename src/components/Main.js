import React, { useState, useEffect } from 'react';
import './Main.css';

import Skill from './Skill';
import EmailSender from './EmailSender';
import { ReactComponent as OutlookIcon } from '../assets/icons/Outlook.svg'

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
  const skillContainerClass = isLandscape ? 'skill-container landscape' : 'skill-container portrait';

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
		<div className={skillContainerClass}>
		  <Skill title="Languages & Frameworks" skills="Python;C#;Java;SQL;HTML;CSS;JavaScript;PHP"><OutlookIcon width="2rem" height="2rem" fill="black" /></Skill>
		  <Skill title="Front-End" skills="React;Redux;Bootstrap;JQuery;Figma"><OutlookIcon width="2rem" height="2rem" fill="black" /></Skill>
		  <Skill title="Back-End & Databases" skills="Node/Express;PostgreSQL;SQLite"><OutlookIcon width="2rem" height="2rem" fill="black" /></Skill>
		  <Skill title="QA" skills="MochaChai"><OutlookIcon width="2rem" height="2rem" fill="black" /></Skill>
	    </div>
	  </div>
	  <div className="section dark">
	    <h1>Get in touch!</h1>
		<EmailSender />
	  </div>
    </div>
  );
};

export default Main;