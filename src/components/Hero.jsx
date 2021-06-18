import React from 'react';

import { motion } from "framer-motion"

import HeroStyled from '../style/components/hero';

const Hero = () => {

    return (
        <HeroStyled>
            <div className="container">
                <div 
                    className="heroSection">
                    <div className="intro">
                    <motion.svg 
                        initial= {{
                            opacity: 0,
                            y: 80
                        }}
                        animate= {{
                            opacity: .4,
                            y: 0,
                            transition: {
                                duration: 1,
                                ease: 'easeInOut'
                            }
                        }}
                        viewBox="0 0 468 162" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 19849">
                            <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M300.722 160.22V0H274.091V160.22H300.722ZM131.432 4.31278V160.22H102.321V92.0779H29.1113V160.22H0V4.31278H29.1113V71.3765H102.321V4.31278H131.432ZM229.846 92.1857C229.846 88.7355 229.343 85.5009 228.336 82.4819C227.402 79.3911 225.964 76.6956 224.024 74.3955C222.083 72.0953 219.603 70.2983 216.584 69.0045C213.637 67.6388 210.187 66.9559 206.233 66.9559C198.542 66.9559 192.469 69.1483 188.012 73.5329C183.627 77.9176 180.824 84.1352 179.602 92.1857H229.846ZM179.063 108.251C179.494 113.929 180.501 118.853 182.082 123.022C183.663 127.119 185.748 130.533 188.335 133.265C190.923 135.924 193.978 137.937 197.5 139.303C201.094 140.597 205.047 141.244 209.36 141.244C213.673 141.244 217.375 140.74 220.466 139.734C223.628 138.728 226.36 137.614 228.66 136.392C231.032 135.17 233.081 134.056 234.806 133.049C236.603 132.043 238.328 131.54 239.981 131.54C242.209 131.54 243.862 132.366 244.941 134.02L252.596 143.723C249.649 147.174 246.342 150.085 242.676 152.457C239.011 154.757 235.165 156.626 231.14 158.063C227.186 159.429 223.125 160.4 218.956 160.975C214.859 161.55 210.87 161.837 206.988 161.837C199.297 161.837 192.145 160.579 185.532 158.063C178.919 155.476 173.169 151.702 168.281 146.742C163.393 141.711 159.548 135.529 156.744 128.197C153.941 120.794 152.539 112.24 152.539 102.536C152.539 94.989 153.761 87.9089 156.205 81.2959C158.649 74.6111 162.135 68.8248 166.664 63.937C171.264 58.9773 176.835 55.0598 183.376 52.1846C189.989 49.3095 197.428 47.8719 205.694 47.8719C212.667 47.8719 219.1 48.986 224.994 51.2143C230.888 53.4425 235.956 56.7131 240.197 61.0259C244.438 65.2668 247.744 70.514 250.116 76.7675C252.56 82.9492 253.782 90.0293 253.782 98.0079C253.782 102.033 253.351 104.765 252.488 106.202C251.625 107.568 249.972 108.251 247.528 108.251H179.063ZM329.293 160.22L354.211 142.562V0H327.579V160.22H329.293ZM467.999 61.9282C463.509 57.6444 458.18 54.2887 452.013 51.8612C445.328 49.2016 437.889 47.8719 429.694 47.8719C421.428 47.8719 413.917 49.2016 407.16 51.8612C400.404 54.5207 394.617 58.2944 389.801 63.1822C385.057 68.0701 381.355 74.0361 378.696 81.0803C376.108 88.1245 374.814 95.9953 374.814 104.693C374.814 112.407 375.816 119.454 377.818 125.833L402.272 108.504C402.224 107.336 402.2 106.137 402.2 104.908C402.2 93.0482 404.429 83.9914 408.885 77.7379C413.414 71.4125 420.35 68.2498 429.694 68.2498C437.896 68.2498 444.185 70.7345 448.559 75.704L467.999 61.9282Z"/>
                            <rect id="circle" x="440.125" y="134.013" width="27.7036" height="27.7036" rx="13.8518"/>
                        </g>
                    </motion.svg>

                    <motion.div className="shortDetails">
                        <motion.h6
                            initial= {{
                                opacity: 0,
                                y: 80
                            }}
                            animate= {{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    delay: 1,
                                    ease: 'easeInOut'
                                }
                            }}
                        >I am</motion.h6>

                        <motion.h3
                            initial= {{
                                opacity: 0,
                                y: 80
                            }}
                            animate= {{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: 1,
                                    ease: 'easeInOut'
                                }
                            }}
                        >Iheonye Chukwuemeka</motion.h3>
                        <motion.p
                            initial= {{
                                opacity: 0,
                                y: 80
                            }}
                            animate= {{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 1,
                                    ease: 'easeInOut'
                                }
                            }}
                        >a Product Designer based in Lagos, Nigeria. 
                        I am in love with making users fall in love with products.</motion.p>
                    </motion.div>
                    </div>
                    <div className="otherDetails">
                        <ul>
                            <motion.li
                                initial= {{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate= {{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.2,
                                        delay: 2,
                                        ease: 'easeInOut'
                                    }
                                }}
                            >Where do you see your business in the near future? </motion.li>
                            <motion.li
                                initial= {{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate= {{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                        delay: 2,
                                        ease: 'easeInOut'
                                    }
                                }}
                            >What do you envision for your users? </motion.li>
                            <motion.li
                                initial= {{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate= {{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        delay: 2,
                                        ease: 'easeInOut'
                                    }
                                }}
                            >What is your favourite application? </motion.li>
                            <motion.li
                                initial= {{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate= {{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        delay: 2,
                                        ease: 'easeInOut'
                                    }
                                }}
                            >Design makes businesses achieve their goals with the users in mind.</motion.li>
                            <motion.li
                                initial= {{
                                    opacity: 0,
                                    y: 80
                                }}
                                animate= {{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                        delay: 2,
                                        ease: 'easeInOut'
                                    }
                                }}
                                className="red">I can help you get there!!!</motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeroStyled>
    )
}

export default Hero;