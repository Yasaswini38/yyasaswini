// src/App.js
import React from 'react';
import Hero from './Hero';
import ContentTabs from './ContentTabs';
import AdditionalInfo from './AdditionalInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="resume-container">
        <ContentTabs />
      </div>
      <div className="additional-info-container">
        <AdditionalInfo />
      </div>
    </div>
  );
}

export default App;
