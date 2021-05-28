import React from 'react';

import {Link} from 'react-router-dom';

// style
import { SingleProjectStyle } from '../../style/components/singleProjectStyle';


const SingleProject = ({ imgUrl, title, desc, comingSoon, id }) => {
    return (
        <>
        {
            comingSoon ?
            <SingleProjectStyle>
                <img src={imgUrl} alt={title} />
                <h5>{title}</h5>
                <p>{desc}</p>
                {comingSoon && <p className="soon">Coming soon...</p>}
            </SingleProjectStyle> :

            <Link to={`/caseStudy/${id}`} style={{ textDecoration: 'none' }}>
                <SingleProjectStyle>
                    <img src={imgUrl} alt={title} />
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </SingleProjectStyle> 
            </Link>
        }
        </>
    )
}

export default SingleProject;