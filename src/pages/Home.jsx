import React from 'react';
import FeaturedSlides from '../components/featuredSlides';
import Hero from '../components/Hero';
import Styled from 'styled-components';
import Marquee from '../components/Marquee';
import FeaturedSlideMobile from '../components/featuredSlides/FeaturedSlideMobile';
import { Helmet } from "react-helmet";

import favicon from '../assets/images/faviconbig.jpg';

const Home = () => {

    // window.scrollTo(0, 0);
    
    return (
        <>
            <Helmet>
            {/* <!-- HTML Meta Tags --> */}
                <title>Sophisticateddev</title>
                <meta name="description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                        Human Centered designs for individuals and businesses." />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content="Sophisticateddev" />
                <meta itemprop="description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                        Human Centered designs for individuals and businesses." />
                <meta itemprop="image" content={favicon} />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://www.sophisticateddev.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sophisticateddev" />
                <meta property="og:description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                        Human Centered designs for individuals and businesses." />
                <meta property="og:image" content={favicon} />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sophisticateddev" />
                <meta name="twitter:description" content="I am Iheonye Chukwuemeka Kingsley, a product designer passionate about building 
                        Human Centered designs for individuals and businesses." />
                <meta name="twitter:image" content={favicon} />

                {/* <!-- Meta Tags Generated via http://heymeta.com --> */}
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