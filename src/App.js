import React from 'react';
import './sass/index.sass';
import Header from './components/Header.js';
import MainBlock from './components/Content/MainBlok.js';
import AboutSecurity from './components/Content/SecuritySection/AboutSecurity';
import DeepDive from './components/Content/SectionDeepDive/DeepDive';
import ReadyToStart from './components/Content/ReadyToStart/ReadyToStart';
import Footer from './components/Content/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainBlock/>
        <AboutSecurity/>
        <DeepDive/>
        <ReadyToStart/>
        <Footer/>
    </div>
  );
}

export default App;
