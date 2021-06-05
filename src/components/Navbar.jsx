import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

import {NavbarStyle} from '../style/components/navbar'

import logo from '../assets/icons/logo.svg';
import close from '../assets/icons/close.svg';

import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
import dribbble from '../assets/icons/dribbble.svg';
import behance from '../assets/icons/behance.svg';
import medium from '../assets/icons/medium.svg';

const Navbar = ({ handleOnclick }) => {
    return (
        <NavbarStyle>
            <img className="closeBtn" src={close} onClick={handleOnclick} alt="close button" />

            <ul>
                <motion.li
                    initial= {{
                        opacity: 0,
                        y: 50
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            ease: 'easeIn'
                        }
                    }}
                ><Link to="/" onClick={handleOnclick}>Home</Link></motion.li>
                <motion.li
                    initial= {{
                        opacity: 0,
                        y: 50
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 1,
                            ease: 'easeIn'
                        }
                    }}
                ><Link to="/projects" onClick={handleOnclick}>Projects</Link></motion.li>
                <motion.li
                    initial= {{
                        opacity: 0,
                        y: 50
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 1.2,
                            ease: 'easeIn'
                        }
                    }}
                ><Link to="/about" onClick={handleOnclick}>About Me</Link></motion.li>
                <motion.li
                    initial= {{
                        opacity: 0,
                        y: 50
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 1.4,
                            ease: 'easeIn'
                        }
                    }}
                ><Link onClick={handleOnclick}>Random Stuffs</Link></motion.li>
                <motion.li
                    initial= {{
                        opacity: 0,
                        y: 50
                    }}
                    animate= {{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 1.6,
                            ease: 'easeIn'
                        }
                    }}
                ><Link onClick={handleOnclick}>Get in touch</Link></motion.li>
            </ul>

            <div className="socialIcons">
                <a data-name="twitter" href="twitter.com"><img src={twitter} alt="twitter link" /></a>
                <a data-name="linkedIn" href="linkedin.com"><img src={linkedin} alt="linkedin link" /></a>
                <a data-name="dribbble" href="dribbble.com"><img src={dribbble} alt="dribbble link" /></a>
                <a data-name="behance" href="behance.com"><img src={behance} alt="behance link" /></a>
                <a data-name="medium" href="medium.com"><img src={medium} alt="medium link" /></a>
            </div>

            <img className="logo" src={logo} alt="logo" />
        </NavbarStyle>
    )
}

export default Navbar;