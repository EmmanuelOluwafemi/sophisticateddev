import React from 'react';
import {random} from '../utils/randomData';
import RandomCard from '../components/RandomCard';

// Style
import {ProjectsContainer} from '../style/pages/projectStyle';

const Random = () => {

    window.scrollTo(0, 0);
    
    return (
        <ProjectsContainer>
            <div className="container">
                <h3>Random stuffs</h3>
                <div className="grid">
                    {random.map((item, index) => (
                        <RandomCard
                            key={item.imageUrl}
                            id={index}
                            imgUrl={item.imageUrl} 
                            title={item.title}
                            type={item.type}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </ProjectsContainer>
    )
}

export default Random;