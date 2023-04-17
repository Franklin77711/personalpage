import React, {useContext } from 'react';
import '../style/App.scss';
import "../style/desktop.scss";
import Secret from './Secret';
import Navbar from './Navbar';
import { ThemeContext } from '../Context/theme';
import js from "../images/js.svg"
import ts from "../images/ts.svg"
import sass from "../images/sass.svg"
import react from "../images/react.svg"
import node from "../images/nodejs.svg"



function App() {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className="App" id={theme}>
      <Navbar/>
      <div id='welcome-page'>
        <div id='header-content'>
          <h1>Nagy Róbert</h1>
          <h2>Front-End Developer</h2>
        </div>
      </div>
      <div id='technologies'>
        <div className='badge'><img src={js} alt="javascript logo" className='tech-logo' /></div>
        <div className='badge'><img src={react} alt="react logo" className='tech-logo'/></div>
        <div className='badge'><img src={ts} alt="typescript logo" className='tech-logo'/></div>
        <div className='badge'><img src={sass} alt="sass logo" className='tech-logo'/></div>
        <div className='badge'><img src={node} alt="nodejs logo" className='tech-logo'/></div>
      </div>
      <div id='portfolio'>
        
      </div>
      <Secret/>
    </div>
  );
}

export default App;
