import React from 'react';

import Styled from 'styled-components';

import quote from '../assets/icons/quote.svg';

const ResearchCard = ({ content, respondent }) => {
    return (
        <ResearchStyle>
            <img className="quote" src={quote} alt="quote icon" />
            <div className="cont">{content}</div>
            <div className="name">{respondent}</div>
        </ResearchStyle>
    )
}

export default ResearchCard;

const ResearchStyle = Styled.div`
    width: 100%;
    max-width: 450px;
    min-height: 600px;
    max-height: 600px;
    position: relative;
    background: #001F48;
    padding: 0 3.1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 0 2rem;
        min-height: 400px;
        max-height: 400px;
    }

    &:nth-child(2) {
        background: #004833;
        margin-top: 6rem;
        
        @media (max-width: 768px) {
            margin-top: 0;
        }
    }

    &:nth-child(3) {
        background: #480000;
    }

    &:nth-child(4) {
        background: #474800;
        margin-top: 6rem;
        
        @media (max-width: 768px) {
            margin-top: 0;
        }
    }

    .quote {
        position: absolute;
        top: 1.6rem;
        left: 1.1rem;
        width: 6rem;
        height: auto;

        @media (max-width: 768px) {
            top: 1rem;
            left: 1rem;
            width: 4rem;
        }
    }

    .cont {
        font-weight: 500;
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 4rem;

        @media (max-width: 768px) {
            font-size: 1rem;
            line-height: 1.6;
        }
    }

    .name {
        font-weight: 400;
        font-size: 1.3rem;
        color: #fff;

        @media (max-width: 768px) {
            font-size: .9rem;
        }
    }
`;