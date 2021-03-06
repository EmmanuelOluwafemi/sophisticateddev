import React from 'react';

import { Link } from 'react-router-dom';

import HeaderStyle from '../style/components/header';

import menuClosed from '../assets/icons/menuCLosed.svg';
import logo from '../assets/icons/logo.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
import dribbble from '../assets/icons/dribbble.svg';
import behance from '../assets/icons/behance.svg';
import medium from '../assets/icons/medium.svg';

const Header = ({ handleOnclick }) => {

    window.addEventListener("scroll", function(){
        let headerEl = document.querySelector('.sec-nav')
        if(headerEl) {
          headerEl.classList.toggle('sticky', window.scrollY > 0)
        }
    })

    return (
        <HeaderStyle className="sec-nav">
            <div className="container">
                <nav>
                    <div className="menu">
                        <img src={menuClosed} onClick={handleOnclick} alt="menu Icon" />
                    </div>

                    <Link to="/" className="logo">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="socialIcons">
                        <a data-name="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/kingsleyiheonye"><img src={twitter} alt="twitter link" /></a>
                        <a data-name="linkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chukwuemeka-iheonye/"><img src={linkedin} alt="linkedin link" /></a>
                        <a data-name="dribbble" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sophisticateddev"><img src={dribbble} alt="dribbble link" /></a>
                        <a data-name="behance" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/iheonyechukwuemeka"><img src={behance} alt="behance link" /></a>
                        <a data-name="medium" target="_blank" rel="noopener noreferrer" href="https://kingsleyiheonye.medium.com/"><img src={medium} alt="medium link" /></a>
                    </div>
                </nav>
            </div>

        </HeaderStyle>
    )
}

export default Header;