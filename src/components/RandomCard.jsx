import React from 'react';

// style
import { SingleProjectStyle } from '../style/components/singleProjectStyle';


const RandomCard = ({ imgUrl, title, type, link }) => {
    return (
        <a href={link} style={{ textDecoration: 'none' }}>
            <SingleProjectStyle>
                <img 
                    src={imgUrl} 
                    alt={title}
                />
                <h5>{type}</h5>
                <p>{title}</p>
            </SingleProjectStyle> 
        </a>
    )
}

export default RandomCard;