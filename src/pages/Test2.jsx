import React, {useState, useRef, useEffect} from 'react';
import Styled from 'styled-components';
import {featuredSlides} from '../../utils/data';
import FeaturedSlide from './FeaturedSlide';
// import Scrollbar from 'smooth-scrollbar'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Cursor from '../Cursor';

import {Link} from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function RenderImages (activeFeatureIndex) {
    return featuredSlides.map(({imageUrl, comingSoon, title}, index) => {

        
        if(comingSoon === true) {
            return <div className={`boxes ${index}`}>
                <div 
                    className={activeFeatureIndex.activeFeatureIndex === index ? 'box as-primary' : 'box'}
                    key={imageUrl}
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
            </div>
        }
        else {
            return <Link to={`/caseStudy/${index}`}>
            <div className={`boxes ${index}`}>
                <div 
                    className={activeFeatureIndex.activeFeatureIndex === index ? 'box as-primary' : 'box'}
                    key={imageUrl}
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
            </div>
            </Link>
        }
    })
}

const FeaturedSlides = () => {

    const [activeFeatureIndex, setFeatureIndex] = useState(0);
    const [cursor, setCursor] = useState(false);

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

    //     let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
    //         damping: 0.1,
    //         delegateTo: document,
    //       });
    //       ScrollTrigger.scrollerProxy(".scroller", {
    //         scrollTop(value) {
    //           if (arguments.length) {
    //             bodyScrollBar.scrollTop = value;
    //           }
    //           return bodyScrollBar.scrollTop;
    //         },
    //       });
    //       bodyScrollBar.addListener(ScrollTrigger.update);

    //       gsap.set(".box", { zIndex: (i, target, targets) => targets.length - i });

    //     var images = gsap.utils.toArray('.box:not(.three)');

    //     images.forEach((image, i) => {
        
    //     var tl = gsap.timeline({
            
    //         scrollTrigger: {
    //         trigger: ".featureSlider",
    //         scroller: ".scroller",
            
    //         start: () => "top -" + (window.innerHeight * (i)),
            
    //         end: () => "+=" + window.innerHeight,
    //         scrub: true,
    //         toggleActions: "play none reverse none",
    //         invalidateOnRefresh: true,     
    //         }
            
    //     })
        
    //     tl
    //     .fromTo(image, { height: () => { return "100%" } }, { height: () => { return "0%" }, ease: "none" })
    //     ;

    //     var translateTextWrapper = gsap.timeline({ paused: true });

    //     translateTextWrapper
    //     .fromTo('.featureSlideLeft', { y: () => { return 0 } }, { y: () => { return - ((images.length) * window.innerHeight) }, ease: "none" })
    //     ;

    //     ScrollTrigger.create({

    //         trigger: "featureSlider",
    //         scroller: ".scroller",
    //         scrub: true,
    //         markers: true,
    //         pin: true,
    //         start: () => "top top",
    //         end: () => "+=" + ((images.length) * window.innerHeight),
    //         invalidateOnRefresh: true,
    //         animation: translateTextWrapper,
    //     });
        
    // });
    


    }, [])

    const handleMouse = () => {
        setCursor(!cursor)
        console.log(`cursor status ${cursor}`)
    }

    return (
        <FeatureSlidesContainer className="featureSlider" ref={featureSliderRef}>
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
            <div 
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouse}
                ref={featureSliderRightRef} className="featureSlideRight image-wrap">
                <RenderImages 
                    activeFeatureIndex={activeFeatureIndex} 
                    className="its-hover" 
                />

                {/* <div classname="box one"></div>
                <div classname="box two"></div>
                <div classname="box three"></div> */}
            </div>
            {
                cursor &&
                <Cursor />
            }
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
        
        .box {
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

            &.one {
                background-image: url('https://res.cloudinary.com/dhqvopvj4/image/upload/v1621570648/Staybusy_ftjcmw.png')
            }
            &.two {
                background-image: url('https://res.cloudinary.com/dhqvopvj4/image/upload/v1621570648/FoodNation_cbyfs0.png')
            }
            &.three {
                background-image: url('https://res.cloudinary.com/dhqvopvj4/image/upload/v1621570648/Rexsure_mxnmtv.png')
            }

            &.as-primary {
                display: block;
                opacity: 1;
                transform: scale(1);
                transition: all .5s ease-in-out;

                &:hover {
                    transform: scale(1.1);
                } 
            }
        }
    }
`;