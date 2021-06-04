import React from 'react';
import Styled from 'styled-components';
import {featuredSlides} from '../../utils/data';

import Img from 'react-cool-img';
import {Link} from 'react-router-dom';

const FeaturedSlideMobile = () => {
    return (
        <MobileFeaturedStyle>
            {featuredSlides.map((item, index) => (
                <>
                {!item.comingSoon ? 
                <Link to={`/caseStudy/${index}`} style={{ textDecoration: 'none' }}>
                    <div key={item.imageUrl} className="featured">
                        <Img src={item.imageUrl} alt={item.title} debounce={50} />
                        <div className="featured_content">
                            <div className="title"><span>{item.title}</span> - {item.description}</div>
                            <div className="works">
                                {item.works && item.works.map(work => (
                                    <p>{work} <div></div></p>
                                ))}
                            </div>
                            {item.comingSoon && <div className="comingSoon">Coming soon...</div>}
                        </div>
                    </div>
                </Link> :
                <div key={item.imageUrl} className="featured">
                    <Img src={item.imageUrl} alt={item.title} debounce={50} />
                    <div className="featured_content">
                        <div className="title"><span>{item.title}</span> - {item.description}</div>
                        <div className="works">
                            {item.works && item.works.map(work => (
                                <p>{work} <div></div></p>
                            ))}
                        </div>
                        {item.comingSoon && <div className="comingSoon">Coming soon...</div>}
                    </div>
                </div>}
                </>
            ))}
        </MobileFeaturedStyle>
    )
}

export default FeaturedSlideMobile;

const MobileFeaturedStyle = Styled.section`
    display: none;
    @media (max-width: 1190px) {
        display: grid;
        width: 100;
        min-height: 100vh;
        padding: 3rem 6%;
        max-width: 
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        grid-gap: 2rem;

        .featured {
            width: 100%;
            margin-bottom: 2rem;
            
            img {
                width: 100%;
                height: auto;
                border-radius: 32px;
            }

            .title {
                font-size: 1.1rem;
                margin-top: 1.3rem;
                color: #333333;
                text-align: center;

                span {
                    font-weight: 700;
                    font-size: 1.3rem;
                }
            }

            .comingSoon {
                margin-top: 1.5rem;
                text-align: center;
                font-size: 1rem;
                font-weight: 600;
                color: #474747;
            }
        }
    }
`;