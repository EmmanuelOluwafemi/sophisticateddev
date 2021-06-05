import React, { useRef } from 'react';
import Styled from 'styled-components';
import {gsap} from 'gsap';

const Cursor = ({ comingSoon }) => {

    const cusrsorRef = useRef(null)
    
    gsap.set('.cursor', {xPercent: '-50%', yPercent: '-50%'});
    
    window.addEventListener('mousemove', (e) => {
        gsap.to(cusrsorRef.current, 0, {x:e.clientX , y:e.clientY})
    })

    return (
        <>
        {
            !comingSoon &&
        <CursorStyle
        ref={cusrsorRef}
        className="cursor"
        >
            View<br />Case
        </CursorStyle>
        }
        </>
    )
}

export default Cursor;

const CursorStyle = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    pointer-events: none;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    z-index: 1000;
    transition: all .05s ease;
`;

