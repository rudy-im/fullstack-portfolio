import logo from './logo.svg';
import './App.css';

import React from 'react';
import Banner from './components/Banner';

function App() {
  //const isWide = window.innerWidth > window.innerHeight;

  return (
    <div>
      <Banner />
	  <div id="main">
	  {Array.from({ length: 100 }).map((_, i) => (
	    <div key={i}>test</div>
	  ))}
	  </div>
    </div>
  );
}

export default App;