import React from 'react';

import Img from 'react-cool-img';

// style
import { SingleProjectStyle } from '../style/components/singleProjectStyle';


const RandomCard = ({ imgUrl, title, type, link }) => {
    return (
        <a href={link} style={{ textDecoration: 'none' }}>
            <SingleProjectStyle>
                <Img 
                    src={imgUrl} 
                    alt={title} 
                    debounce={50}
                />
                <h5>{type}</h5>
                <p>{title}</p>
            </SingleProjectStyle> 
        </a>
    )
}

export default RandomCard;