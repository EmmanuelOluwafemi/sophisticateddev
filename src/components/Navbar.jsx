import React from 'react';
import {Link} from 'react-router-dom';

import {NavbarStyle} from '../style/components/navbar'

import logo from '../assets/icons/logo.svg';
import close from '../assets/icons/close.svg';

const Navbar = ({ handleOnclick }) => {
    return (
        <NavbarStyle>
            <img className="closeBtn" src={close} onClick={handleOnclick} alt="close button" />

            <ul>
                <li><Link to="/" onClick={handleOnclick}>Home</Link></li>
                <li><Link to="/projects" onClick={handleOnclick}>Projects</Link></li>
                <li><Link to="/about" onClick={handleOnclick}>About Me</Link></li>
                <li><Link onClick={handleOnclick}>Random Stuffs</Link></li>
                <li><Link onClick={handleOnclick}>Get in touch</Link></li>
            </ul>

            <img className="logo" src={logo} alt="logo" />
        </NavbarStyle>
    )
}

export default Navbar;