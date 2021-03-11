import React from 'react';
import Hero from './components/Hero.js';
import './App.css'; 
import Layout from './components/Layout.js';

function App() {
  return (
    <div className="container">
    {/* <img className="logo" src="" alt="OwnerTenant logo"/> */}
    <Layout/>
    <Hero/>
    </div>
  );
}

export default App;
