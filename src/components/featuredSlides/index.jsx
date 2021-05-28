import React, {useState, useRef, useEffect} from 'react';
import Styled from 'styled-components';
import {featuredSlides} from '../../utils/data';
import FeaturedSlide from './FeaturedSlide';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Cursor from '../Cursor';

import {Link} from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function RenderImages (activeFeatureIndex) {
    return featuredSlides.map(({imageUrl, comingSoon, title}, index) => {

        
        if(comingSoon === true) {
            return <><img 
            className={activeFeatureIndex.activeFeatureIndex === index ? 'as-primary its-hover' : 'its-hover'}
            key={imageUrl}
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <Cursor />
            </>
            // eslint-disable-next-line
            
        }
        else {
            return <Link to={`/caseStudy/${index}`}><img 
            className={activeFeatureIndex.activeFeatureIndex === index ? 'as-primary its-hover' : 'its-hover'}
            key={imageUrl}
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <Cursor comingSoon={comingSoon} />
            </Link>
            // eslint-disable-next-lines
        }
    })
}

const FeaturedSlides = () => {

    const [activeFeatureIndex, setFeatureIndex] = useState(0);

    const featureSliderRef = useRef(null);
    const featureSliderRightRef = useRef(null);

    useEffect(() => {

        let height = (parseInt(featureSliderRef.current.offsetHeight) - (parseInt(featureSliderRef.current.offsetHeight) / 3));

        function stopTrigger() {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featureSliderRightRef.current,
                    start: "top top",
                    end: () => `+=${height}`,
                    scrub: true,
                    pin: true,
                    // markers: true
                }
            })

            return tl
        }

        const master = gsap.timeline()
        master.add(stopTrigger());
    }, [])

    return (
        <FeatureSlidesContainer ref={featureSliderRef}>
            <div className="featureSlideLeft">
                {
                    featuredSlides.map((feature, index) => (
                        <FeaturedSlide 
                            key={feature.imageUrl}
                            title={feature.title}
                            description={feature.description}
                            works={feature.work}
                            comingSoon={feature.comingSoon}
                            index={index}
                            updateActiveImage={setFeatureIndex}
                        />
                    ))
                }
            </div>
            <div ref={featureSliderRightRef} className="featureSlideRight">
                <RenderImages activeFeatureIndex={activeFeatureIndex} />
            </div>
        </FeatureSlidesContainer>
    )
}

export default FeaturedSlides;

const FeatureSlidesContainer = Styled.div`
    max-width: 100vw;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 6%;
    @media (max-width: 1190px) {
        display: none;
    }

    .featureSlideRight {
        height: 100vh;
        overflow: hidden;
        position: relative;

        a {
            cursor: pointer;
        }
        
        img {
            width: 100%;
            height: 90%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0;
            transition: all 1s ease-in-out;
            transform: scale(1);
            position: absolute;
            top: 5%;
            display: none;
            /* pointer-events: none; */

            &.as-primary {
                display: block;
                opacity: 1;
                transform: scale(1);
            }
        }
    }
`;