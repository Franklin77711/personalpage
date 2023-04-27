import React, {useContext, useEffect, useState, useRef } from 'react';
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
import petiwebIndex from "../images/indexPic/index-Peti.png"
import waldoIndex from "../images/indexPic/waldo.png"
import shopIndex from "../images/indexPic/webshop.png"
import libraryIndex from "../images/indexPic/library.png"
import linkedin from "../images/contactsvg/linkedin.svg"
import github from "../images/contactsvg/gitub.svg"
import lock from "../images/contactsvg/lock.svg"



function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  const [secretText, setSecretText] = useState<string>('');
  const [renderSecret, setRenderSecret] = useState<boolean>(false);
  const secretRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef<boolean>(false);
  const [showTip, setShowTip] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);

  const handleSecretChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecretText(e.target.value.toLowerCase());
  };
  function tipClick() {
    setShowTip(true);
    setShake(true)
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const savedTheme:string|null = localStorage.getItem('theme');
      if(savedTheme){
        setTheme(savedTheme);
      }else{
        setTheme('hogwarts');
        localStorage.setItem('theme', 'hogwarts')
      }
    } else {
    localStorage.setItem('theme', theme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(()=>{
    if (secretText === "alohomora"){
      setRenderSecret(true)
    }else{
      setRenderSecret(false)
    }
  },[secretText])

  useEffect(() => {
    if (secretRef.current) {
      secretRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [renderSecret]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showTip) {
      timeout = setTimeout(() => {
        setShowTip(false);
        setShake(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showTip]);

  return (
    <div className="App" id={theme}>
      <Navbar/>
      <div id='welcome-page'>
        <div id='header-content'>
          <h1> 
            <span>N</span>
            <span>a</span>
            <span>g</span>
            <span>y</span>
            <span> </span>
            <span>R</span>
            <span>o</span>
            <span>b</span>
            <span>e</span>
            <span>r</span>
            <span>t</span>
          </h1>
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
          <img src={petiwebIndex} className='portfolio-gif petiweb-gif' alt='index for my Photographer Portfolio Website'/>
          <div className='portfolio-item-summary'>
              <div className='title'>Photographer Portfolio Website</div>
              <div className='description'>In this project I've created a portolio website for a photographer.
                The page was only made with HTML, Sass and JS. You can view the  creator's videos and pictures and send him an email to contact him.
                <span className='not-in-used-text'>There is no code provided to this project beacuse the website is currently in use.</span></div>
              <div className='buttons'>
                <a href='https://peti-web-b1666.web.app/' target='_blank' className='preview link' rel='noreferrer'>Demo</a>
              </div>
          </div>
        </div>
        <div className='portfolio-item waldo'>
          <img src={waldoIndex} className='portfolio-gif waldo-gif' alt='index for my Where is Waldo App'/>
          <div className='portfolio-item-summary'>
              <div className='title'>Where is Waldo App</div>
              <div className='description'>This game is based on Where is Waldo but here insted of Waldo you have to find three different character.
                                            After you successfuly find all of them you are asked for a username and you are placed on the leaderboard.
                                            This project was made in React and with using API calls to store and retrive leaderboard data from Firebase.</div>
              <div className='buttons'>
                <a href='https://github.com/Franklin77711/where-is-waldo' target='_blank' className='code link' rel='noreferrer'>Code</a>
                <a href='https://where-is-waldoapp.web.app/' target='_blank' className='preview link' rel='noreferrer'>Demo</a>
              </div>
          </div>
        </div>
         <div className='portfolio-item shop'>
          <img src={shopIndex} className='portfolio-gif shop-gif' alt='index for my E-Commerce Site'/>
          <div className='portfolio-item-summary'>
              <div className='title'>E-Commerce Site</div>
              <div className='description'>This webshop page was made in React. You can add items to the cart, remove them and muliply them.
                                            All of the items data comes form a JSON file. In this project I have learned a lot about hadling useState and passing data between components 
                                            <span className='not-in-used-text'>  (not responsive)</span></div>
              <div className='buttons'>
                <a href='https://github.com/Franklin77711/shopping-cart' target='_blank' className='code link' rel='noreferrer'>Code</a>
                <a href='https://franklin77711.github.io/shopping-cart/' target='_blank' className='preview link' rel='noreferrer'>Demo</a>
              </div>
          </div>
        </div>
        <div className='portfolio-item library'>
          <img src={libraryIndex} className='portfolio-gif library-gif' alt='index for my Trophy Library' />
          <div className='portfolio-item-summary'>
              <div className='title'>Trophy Library</div>
              <div className='description'>My goal in this project was to learn how arrays work. It was made in vanilla JS.
                                           You can add games with any name with any hours with a difficulty between zero and ten. Your games are stored in localstorage.
                                           You can not add two games with the same name. You can modify the existing games or remove them.</div>
              <div className='buttons'>
                <a href='https://github.com/Franklin77711/library' target='_blank' className='code link' rel='noreferrer'>Code</a>
                <a href='https://franklin77711.github.io/library/' target='_blank' className='preview link' rel='noreferrer'>Demo</a>
              </div>
          </div>
        </div>
      </div>
    <div id="about">
      <div>
      As a front-end web wizard, I have honed my magical skills in the Front-end but I am not afraid to speak out You Know Whose name to craft enchanting websites that captivate users and transport them to fantastical digital realms.
      If you would like to know me better come find me in the Restricted Section BUT! <span className='spell'>only a true wizard can enter!</span>
      </div>
    </div>
    <div id="footer">
      <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 150"><path fill="#000000" fillOpacity="1" d="M0,320L60,64L120,192L180,160L240,0L300,64L360,320L420,96L480,32L540,64L600,96L660,96L720,288L780,64L840,64L900,32L960,224L1020,32L1080,160L1140,256L1200,160L1260,192L1320,288L1380,288L1440,128L1440,320L1380,320L1320,320L1260,320L1200,320L1140,320L1080,320L1020,320L960,320L900,320L840,320L780,320L720,320L660,320L600,320L540,320L480,320L420,320L360,320L300,320L240,320L180,320L120,320L60,320L0,320Z"></path></svg>
      <div className='footer-content'>
        <div className='footer-title'>
          <a href="https://www.linkedin.com/in/robertnagy777/" className='contact-link' target='_blank' rel='noreferrer'><img src={linkedin} alt="linkedin logo" className='contact-img'/></a>
          <div className='title-lock'>
            <div className='restricted'>Restricted Section</div>
            <img src={lock} alt="lock to the Restricted Section" className={shake ? "shake lock-img":"lock-img"} onClick={tipClick}/>
          </div>
          <a href="https://github.com/Franklin77711" className='contact-link' target='_blank' rel='noreferrer'><img src={github} alt="github logo" className='contact-img'/></a>
        </div>
        <input type="text" className='secret-input' value={secretText} onChange={handleSecretChange}/>
      </div>
      {showTip && <div id='secret-tip'>Don't belive your eyes!</div>}
    </div>
    {renderSecret ? <div ref={secretRef}><Secret/></div>: ""}
    
    </div>
  );
}

export default App;
