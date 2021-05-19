import React from 'react';
import FeaturedSlides from '../components/featuredSlides';
import Hero from '../components/Hero';
import Styled from 'styled-components';
import Marquee from '../components/Marquee';
import FeaturedSlideMobile from '../components/featuredSlides/FeaturedSlideMobile';

const Home = () => {

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