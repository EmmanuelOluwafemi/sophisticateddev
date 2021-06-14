import React, { useEffect } from 'react';
import '../App.css'
import Styled from 'styled-components';
import Scrollbar from 'smooth-scrollbar'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Test = () => {

    useEffect(() => {
        let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
        damping: 0.1,
        delegateTo: document,
        });
        ScrollTrigger.scrollerProxy(".scroller", {
        scrollTop(value) {
            if (arguments.length) {
            bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
        });
        bodyScrollBar.addListener(ScrollTrigger.update);

        gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

        var images = gsap.utils.toArray('.panel:not(.orange)');

        images.forEach((image, i) => {
        
        var tl = gsap.timeline({
            
            scrollTrigger: {
            trigger: "section.black",
            scroller: ".scroller",
            
            start: () => "top -" + (window.innerHeight * (i)),
            
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,     
            }
            
        })
        
        tl
        .fromTo(image, { height: () => { return "100%" } }, { height: () => { return "0%" }, ease: "none" })
        ;
        
        });

        var translateTextWrapper = gsap.timeline({ paused: true });

        translateTextWrapper
        .fromTo('.text-wrapper', { y: () => { return 0 } }, { y: () => { return - ((images.length) * window.innerHeight) }, ease: "none" })
        ;

        ScrollTrigger.create({

            trigger: "section.black",
            scroller: ".scroller",
            scrub: true,
            markers: true,
            ease: "power2.out",
            pin: true,
            start: () => "top top",
            end: () => "+=" + ((images.length) * window.innerHeight),
            invalidateOnRefresh: true,
            animation: translateTextWrapper,
        });
    }, [])

    return (
    <>
      
      <section class="black">
        
        <div class="text-wrap">    
          <div class="text-wrapper">
            <PanelText class="panel-text blue-text">
                <p className="title">StayBusy</p>
                <h5 className="desc">An Easier Way to Get Your Dreams from Idea 
                to a Money Making Business</h5>
                <div className="works">
                    <p>Design <div></div></p>
                    <p>Web <div></div></p>
                    <p>Product <div></div></p>
                </div>
            </PanelText> 
            <PanelText class="panel-text red-text">
                <p className="title">Foodnation</p>
                <h5 className="desc">An easy way to buy the choicest meal while 
                tracking your delivery</h5>
                <div className="works">
                    <p>Design <div></div></p>
                    <p>Web <div></div></p>
                    <p>Product <div></div></p>
                </div>
            </PanelText>   
            <PanelText class="panel-text orange-text">
                <p className="title">Rexsure</p>
                <h5 className="desc">Feel safe while taking risks and even get 
                rewarded for it</h5>
                <div className="works">
                    <p>Design <div></div></p>
                    <p>Web <div></div></p>
                    <p>Product <div></div></p>
                </div>
                <div className="comingSoon">Coming soon...</div>
            </PanelText> 
          </div>
        </div>
        
        <div class="p-wrap">
          <div class="panel blue"></div> 
          <div class="panel red"></div>
          <div class="panel orange"></div>
        </div>
        
      </section>
    </>
    )
}

export default Test;

const PanelText = Styled.div`
    width: 100%;
    height: 100%;

    font-size: 1rem;
    text-align:left;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .title, .comingSoon {
        font-family: "Proxima Nova", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: #333333;
        margin-bottom: 1.5rem;
    }

    .desc {
        font-family: "Proxima Nova", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #333333;
        margin-bottom: 1.5rem;
        max-width: 375px;
    }

    .works {
        display: flex;
        align-items: center;

        p {
            font-family: "Proxima Nova", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            color: #333333;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;

            div {
                width: 4px;
                height: 4px;
                margin: 0 8px;
                border-radius: 50%;
                background: #333333;
            }

            &:last-child {
                div {
                    display: none;
                }
            }
        }
    }
`;