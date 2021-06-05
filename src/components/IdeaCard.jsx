import React from 'react';

import Styled from 'styled-components';

const IdeaCard = ({ percent, content }) => (
    <IdeaStyle>
        <h5>{percent}</h5>
        <p>{content}</p>
    </IdeaStyle>
)

export default IdeaCard;

const IdeaStyle = Styled.div`
    width: 100%;
    max-width: 450px;
    height: 265px;
    max-height: 270px;
    padding: 3.2rem 1.7rem;
    background: #F57314;
    border-radius: 8px;

    &:nth-child(2) {
        margin-top: 3rem;
        
        @media (max-width: 768px) {
            margin-top: 0;
        }
    }

    &:nth-child(3) {
        margin-top: -3rem;
        
        @media (max-width: 768px) {
            margin-top: 0;
        }
    }

    &:nth-child(4) {
        margin-top: 2rem;
        
        @media (max-width: 768px) {
            margin-top: 0;
        }
    }

    h5 {
        font-weight: 700;
        font-size: 2rem;
        color: #fff;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: 400;
        color: #fff;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;