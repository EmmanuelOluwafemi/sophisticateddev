import React from 'react';
// style
import { SingleProjectStyle } from '../../style/components/singleProjectStyle';


const SingleProject = ({ imgUrl, title, desc, comingSoon }) => {
    return (
        <SingleProjectStyle>
            <img src={imgUrl} alt={title} />
            <h5>{title}</h5>
            <p>{desc}</p>
            {comingSoon && <p className="soon">Coming soon...</p>}
        </SingleProjectStyle>
    )
}

export default SingleProject;