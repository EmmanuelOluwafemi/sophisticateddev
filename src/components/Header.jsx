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

    return (
        <HeaderStyle>
            <div className="container">
                <nav>
                    <div className="menu">
                        <img src={menuClosed} onClick={handleOnclick} alt="menu Icon" />
                    </div>

                    <Link to="/" className="logo">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="socialIcons">
                        <a data-name="twitter" href="twitter.com"><img src={twitter} alt="twitter link" /></a>
                        <a data-name="linkedIn" href="linkedin.com"><img src={linkedin} alt="linkedin link" /></a>
                        <a data-name="dribbble" href="dribbble.com"><img src={dribbble} alt="dribbble link" /></a>
                        <a data-name="behance" href="behance.com"><img src={behance} alt="behance link" /></a>
                        <a data-name="medium" href="medium.com"><img src={medium} alt="medium link" /></a>
                    </div>
                </nav>
            </div>

        </HeaderStyle>
    )
}

export default Header;