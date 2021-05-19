import React from 'react';
import {MarqueeStyle, MarqueeContainer} from '../style/components/marquee';

const Marquee = () => {

    return (
        <MarqueeContainer>
        
        <MarqueeStyle>
            <div className="wrapper">
                <span>Prototyping</span>
                <span className="outline">User Research</span>
                <span>User Experience Design</span>
                <span>Prototyping</span>
                <span className="outline">User Research</span>
                <span>User Experience Design</span>
                <span>Prototyping</span>
            </div>
        </MarqueeStyle>
        <MarqueeStyle className="new">
            <div className="wrapper">
                <span className="outline">Intercation design</span>
                <span>Webflow</span>
                <span className="outline">User Interface Design</span>
                <span>Usability Testing</span>
                <span className="outline">Intercation design</span>
                <span>Webflow</span>
                <span className="outline">User Interface Design</span>
                <span>Usability Testing</span>
            </div>
        </MarqueeStyle>
        </MarqueeContainer>
    )
}

export default Marquee;