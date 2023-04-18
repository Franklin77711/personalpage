import griff from "../images/housesSvg/griffin.svg"
import snake from "../images/housesSvg/slyder.svg"
import raven from "../images/housesSvg/raven.svg"
import badger from "../images/housesSvg/huffle.svg"
import { ThemeContext } from '../Context/theme';
import React, {useContext } from 'react';

function Navbar (){

    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <div id="navbar">
            <div id="theme-selector">
                <div className="crest">
                    <div className="oval top"></div>
                    <div className="houses">
                        <div className="gryffindor house-crest" onClick={()=>setTheme("gryffindor")}> <img src={griff} alt="griffyndor logo" className="house-logo"/></div>
                        <div className="slytherin house-crest"  onClick={()=>setTheme("slytherin")}> <img src={snake} alt="slyderin logo" className="house-logo"/></div>
                        <div className="ravenclaw house-crest"  onClick={()=>setTheme("ravenclaw")}> <img src={raven} alt="ravenclaw logo" className="house-logo"/></div>
                        <div className="hufflepuff house-crest"  onClick={()=>setTheme("hufflepuff")}> <img src={badger} alt="hufflepuff logo" className="house-logo"/></div>
                    </div>
                    <div className="oval left"></div>
                    <div className="oval right"></div>
                    <div className="H" onClick={()=>setTheme("hogwarts")}>H</div>
                    <div className="theme-selector-title">Choose Theme</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar