import React from 'react';
import Styled from 'styled-components';

import Img from 'react-cool-img';

const MobileCaseStudy = ({ title, footnote, images }) => {

    return (
        <MobileCaseStudyStyle>
            <h1>{title}</h1>
            <div className="gridMobile">
                {
                    images.map(img => (
                        <Img src={img} alt="app screens" debounce={50} />
                    ))
                }
            </div>

            { footnote &&
            <div className="footNote">
                <h6>{footnote.title}</h6>
                <p>{footnote.desc}</p>
            </div>
            }
        </MobileCaseStudyStyle>
    )
}

export default MobileCaseStudy;

const MobileCaseStudyStyle = Styled.section`
    position: relative;
    width: 100%;
    /* min-height: 100vw; */
    padding: 0 6%;
    padding-bottom: 4rem;

    h1 {
        font-weight: 700;
        font-size: 2.5rem;
        color: #000;
        text-align: center;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .gridMobile {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;

        img {
            width: 100%;
            height: auto;
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);

            img {
                margin: 0 auto;
                width: 100%;
                height: auto;
            }
        }
    }

    .footNote {
        width: 100%;
        max-width: 264px;
        padding: 1.5rem 2rem;
        background: #F57314;
        border-radius: 1.1rem;

        h6 {
            font-size: 1.2rem;
            color: #fff;
            font-weight: 700;
        }

        p {
            font-size: 1rem;
            color: #fff;
            margin-top: 1rem;
        }

        @media (max-width: 768px) {
            position: absolute;
            bottom: 2rem;
            right: 6%;
            max-width: 180px;
            padding: 1rem 1rem;
            border-radius: .8rem;

            h6 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }
    }
`;