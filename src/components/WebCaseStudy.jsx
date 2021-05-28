import React from 'react';
import Styled from 'styled-components';

const WebCaseStudy = ({ images }) => {

    return (
        <WebCaseStudyStyle>
            {
                images.map(img => (
                    <img src={img} alt="app screens" />
                ))
            }
        </WebCaseStudyStyle>
    )
}

export default WebCaseStudy;

const WebCaseStudyStyle = Styled.section`
    position: relative;
    width: 100%;
    padding: 0 6%;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    
    img {
        width: 100%;
        max-width: 742px;
        height: auto;
        

        &:nth-child(even) {
            margin-left: auto;
        }
    }
`;