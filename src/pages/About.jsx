import React from 'react';

import {AboutContainer} from '../style/pages/aboutStyle';
import face from '../assets/images/sophisticated.jpg';

const About = () => {
    return (
        <AboutContainer>
            <div className="row">

                <div className="card mobile">
                    <img src={face} alt="my face" />
                </div>
                <div className="card">
                    <svg viewBox="0 0 468 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 19849">
                            <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M300.722 160.22V0H274.091V160.22H300.722ZM131.432 4.31278V160.22H102.321V92.0779H29.1113V160.22H0V4.31278H29.1113V71.3765H102.321V4.31278H131.432ZM229.846 92.1857C229.846 88.7355 229.343 85.5009 228.336 82.4819C227.402 79.3911 225.964 76.6956 224.024 74.3955C222.083 72.0953 219.603 70.2983 216.584 69.0045C213.637 67.6388 210.187 66.9559 206.233 66.9559C198.542 66.9559 192.469 69.1483 188.012 73.5329C183.627 77.9176 180.824 84.1352 179.602 92.1857H229.846ZM179.063 108.251C179.494 113.929 180.501 118.853 182.082 123.022C183.663 127.119 185.748 130.533 188.335 133.265C190.923 135.924 193.978 137.937 197.5 139.303C201.094 140.597 205.047 141.244 209.36 141.244C213.673 141.244 217.375 140.74 220.466 139.734C223.628 138.728 226.36 137.614 228.66 136.392C231.032 135.17 233.081 134.056 234.806 133.049C236.603 132.043 238.328 131.54 239.981 131.54C242.209 131.54 243.862 132.366 244.941 134.02L252.596 143.723C249.649 147.174 246.342 150.085 242.676 152.457C239.011 154.757 235.165 156.626 231.14 158.063C227.186 159.429 223.125 160.4 218.956 160.975C214.859 161.55 210.87 161.837 206.988 161.837C199.297 161.837 192.145 160.579 185.532 158.063C178.919 155.476 173.169 151.702 168.281 146.742C163.393 141.711 159.548 135.529 156.744 128.197C153.941 120.794 152.539 112.24 152.539 102.536C152.539 94.989 153.761 87.9089 156.205 81.2959C158.649 74.6111 162.135 68.8248 166.664 63.937C171.264 58.9773 176.835 55.0598 183.376 52.1846C189.989 49.3095 197.428 47.8719 205.694 47.8719C212.667 47.8719 219.1 48.986 224.994 51.2143C230.888 53.4425 235.956 56.7131 240.197 61.0259C244.438 65.2668 247.744 70.514 250.116 76.7675C252.56 82.9492 253.782 90.0293 253.782 98.0079C253.782 102.033 253.351 104.765 252.488 106.202C251.625 107.568 249.972 108.251 247.528 108.251H179.063ZM329.293 160.22L354.211 142.562V0H327.579V160.22H329.293ZM467.999 61.9282C463.509 57.6444 458.18 54.2887 452.013 51.8612C445.328 49.2016 437.889 47.8719 429.694 47.8719C421.428 47.8719 413.917 49.2016 407.16 51.8612C400.404 54.5207 394.617 58.2944 389.801 63.1822C385.057 68.0701 381.355 74.0361 378.696 81.0803C376.108 88.1245 374.814 95.9953 374.814 104.693C374.814 112.407 375.816 119.454 377.818 125.833L402.272 108.504C402.224 107.336 402.2 106.137 402.2 104.908C402.2 93.0482 404.429 83.9914 408.885 77.7379C413.414 71.4125 420.35 68.2498 429.694 68.2498C437.896 68.2498 444.185 70.7345 448.559 75.704L467.999 61.9282Z"/>
                            <rect id="circle" x="440.125" y="134.013" width="27.7036" height="27.7036" rx="13.8518"/>
                        </g>
                    </svg>
                    <div className="about-content">
                        <p>I am <span>Iheonye Chukwuemeka Kingsley</span>, a product designer passionate about building 
                             Human Centered designs for individuals and businesses.
                        </p>

                        <p>I started out as an Agricultural Engineer before migrating to product design. 
                            I currently reside in Lagos, Nigeria. I have gathered experiences working at 
                            <u>Traindemy</u> (Edtech), <u>ThankUCash</u> (Fintech), and <u>Software Business Solution 
                            consulting(Agency)</u>. 
                            I have also freelanced for a lot of startups..
                        </p>

                        <p>I believe that design is an intentional art of bringing about innovative ways of solving problems 
                            while bringing useful experiences to the users. This is where I come in. I craft delightful experiences 
                            that ease the day to day life of the users. I have made strides in the Educational, financial, 
                            and Commercial sectors, to mention but a few.
                        </p>

                        <p>
                            I am a community builder, I have helped over 7000 people from more than 21 countries of the world get the basic 
                            knowlegde of UI/UX design. I am also a members of Numerous design communities where I give my quota in spreading 
                            design education and helping fellow designers. Communities involved include Friends of Figma, Asa 
                        </p>
                        <p>
                            I currently mentor at <u>Zuri Training</u>, <u>HNG Internship</u>, <u>SheCodesAfrica</u>, and <u>Reskill America</u>
                        </p>
                        <p>
                            I am interested in working with startups and product companies that aim to acquire, retain and expand their businesses. 
                            I you have such dreams do not hesitate to send a hi <a href="/" className="bold"><b>here</b></a>
                        </p>

                        <h5>View my CV <a href="/"><bold><u>here</u></bold></a></h5>
                    </div>
                    
                </div>
                <div className="card web">
                    <img src={face} alt="my face" />
                </div>
            </div>
        </AboutContainer>
    )
}

export default About;