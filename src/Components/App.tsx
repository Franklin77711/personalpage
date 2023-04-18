import React, {useContext } from 'react';
import '../style/App.scss';
import "../style/desktop.scss";
import Secret from './Secret';
import Navbar from './Navbar';
import { ThemeContext } from '../Context/theme';
import js from "../images/skillSvg/js.svg"
import ts from "../images/skillSvg/ts.svg"
import sass from "../images/skillSvg/sass.svg"
import react from "../images/skillSvg/react.svg"
import node from "../images/skillSvg/nodejs.svg"
import waldo from "../images/portfolioGif/whereiswaldo.webp"
import petiwebIndex from "../images/indexPic/index-Peti.png"
import waldoIndex from "../images/indexPic/waldo.png"



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
        <div className='portfolio-item petiweb'>
          <img src={petiwebIndex} className='portfolio-gif petiweb-gif'/>
          <div className='portfolio-item-summary'>
              <div className='title'>Photographer Portfolio Website</div>
              <div className='description'>In this project I've created a portolio website for a photographer.
                The page was only made with HTML, Sass and JS. You can view the  creator's videos and pictures and send him an email to contact him.
                <span className='not-in-used-text'>There is no code provided to this project beacuse the website is currently in use.</span></div>
              <div className='buttons'>
                <a href='https://peti-web-b1666.web.app/' target='_blank' className='preview link'>Preview</a>
              </div>
          </div>
        </div>
        <div className='portfolio-item waldo'>
          <img src={waldoIndex} className='portfolio-gif waldo-gif'/>
          <div className='portfolio-item-summary'>
              <div className='title'>Where is Waldo App</div>
              <div className='description'>This game is based on Where is Waldo but here insted of Waldo you have to find three different character.
                                            After you successfuly find all of them you are asked for a username and you are placed on the leaderboard.
                                            This project was made in React and with using API calls to store and retrive leaderboard data from Firebase.</div>
              <div className='buttons'>
                <a href='https://github.com/Franklin77711/where-is-waldo' target='_blank' className='code link'>Code</a>
                <a href='https://where-is-waldoapp.web.app/' target='_blank' className='preview link'>Preview</a>
              </div>
        </div>
      </div>
    </div>
    <div id="about">
      <div>
      As a front-end web wizard, I have honed my magical skills in the Front-end but I am not afraid to speak out You Know Who's name either to craft enchanting websites that captivate users and transport them to fantastical digital realms.
      If you would like to know me better come find me in the Restricted Section BUT! <span className='spell'>only a true wizard can enter!</span>
      </div>
    </div>
      <Secret/>
    </div>
  );
}

export default App;
