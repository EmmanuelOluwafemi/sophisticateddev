import React, { useRef, useEffect } from 'react';
import Styled from 'styled-components';
import useOnScreen from '../../hooks/useOnScreen';

const FeaturedSlide = ({ index, title, description, works, comingSoon, updateActiveImage }) => {
    
    const ref = useRef(null)

    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if(onScreen) {
            updateActiveImage(index)
        }
    }, [onScreen, index, updateActiveImage])
    
    return (
        <FeaturedSlideStyle>
            <div ref={ref} className="title">{title}</div>
            <div className="desc">{description}</div>
            <div className="works">{works.map(work => (
                <p>{work} <div></div></p>
            ))}</div>
            {comingSoon && <div className="comingSoon">Coming soon...</div>}
        </FeaturedSlideStyle>
    )
}

export default FeaturedSlide;

const FeaturedSlideStyle = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
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