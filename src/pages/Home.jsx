import React from 'react';
import FeaturedSlides from '../components/featuredSlides';
import Hero from '../components/Hero';
import Styled from 'styled-components';
import Marquee from '../components/Marquee';
import FeaturedSlideMobile from '../components/featuredSlides/FeaturedSlideMobile';

import Helmet from 'react-helmet';

import logo from '../public/faviconbig.jpg';

const Home = () => {

    // window.scrollTo(0, 0);

    <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Sophisticateddev</title>
        <meta name="title" content="Sophisticateddev"/>
        <meta name="description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.sophisticateddev.com/"/>
        <meta property="og:title" content="Sophisticateddev"/>
        <meta property="og:description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses."/>
        <meta property="og:image" content={logo}/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.sophisticateddev.com/"/>
        <meta property="twitter:title" content="Sophisticateddev"/>
        <meta property="twitter:description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                    Human Centered designs for individuals and businesses."/>
        <meta property="twitter:image" content={logo}/>


    </Helmet>
    
    return (
        <>
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