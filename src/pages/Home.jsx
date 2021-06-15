import React from 'react';
import FeaturedSlides from '../components/featuredSlides';
import Hero from '../components/Hero';
import Styled from 'styled-components';
import Marquee from '../components/Marquee';
import FeaturedSlideMobile from '../components/featuredSlides/FeaturedSlideMobile';
import { Helmet } from "react-helmet";

import favicon from '../assets/images/faviconBg.jpg';

const Home = () => {

    // window.scrollTo(0, 0);
    
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content='I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses.'></meta>
        
                <meta property="og:title" content='Sophisticateddev' key="ogtitle" />
                <meta property="og:description" content='I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses.' key="ogdesc" />
                <title>Sophisticateddev</title>
                {/* Twitter */}
                <meta name="twitter:card" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses." key="twcard" />
                <meta name="twitter:creator" content='@kingsleyiheonye' key="twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content='http://sophisticateddev.com' key="ogurl" />
                <meta property="og:image" content={favicon} key="ogimage" />
                <meta property="og:site_name" content='Sophisticateddev' key="ogsitename" />
                <meta property="og:title" content='Sophisticateddev' key="ogtitle" />
                <meta property="og:description" content='I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses.' key="ogdesc" />
            </Helmet>
            <Hero />
            <Featured>
                <h1>Featured Projects</h1>
                <FeaturedSlides />
                <FeaturedSlideMobile />
            </Featured>
            <Marquee />
        </>
    )
}

export default Home;

const Featured = Styled.section`
    width: 100%;

    h1 {
        font-weight: 700;
        font-size: 9rem;
        text-align: center;
        -webkit-text-stroke: 2px #000;
        color: #f2f2f2;
        opacity: .5;
        margin-bottom: 2rem;

        &:hover {
            color: #000;
            opacity: 1;
            transition: .7s ease-in-out;
        }

        @media (max-width: 1000px) {
            font-size: 4rem;
            margin-bottom: 0;
            margin-top: 2rem;
        }
    }
`;