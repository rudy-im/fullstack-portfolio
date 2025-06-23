import logo from './logo.svg';
import './App.css';

import React from 'react';
import TopBanner from './components/TopBanner';

function App() {
  const isWide = window.innerWidth > window.innerHeight;

  return (
    <div style={isWide ? { marginLeft: '220px' } : { paddingTop: '60px' }}>
      <TopBanner />
    </div>
  );
}

export default App;