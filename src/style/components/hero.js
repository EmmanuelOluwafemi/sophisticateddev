import Styled from 'styled-components';

const HeroStyled = Styled.section`
    width: 100%;
    max-width: 100vw;


    .heroSection {
        width: 100%;
        min-height: 80vh;
        display: grid;
        grid-template-columns: 50% 50%;
        
        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .intro {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            svg {
                width: 100%;
                max-width: 468px;
                height: auto;
                cursor: pointer;
                transition: all .3s ease-in;

                @media (max-width: 768px) {
                    width: 80%;
                }
                
                g {
                    path#Subtract {
                        fill: black;
                    }
                    
                    rect#circle {
                        fill: #F11C1C;
                    }
                }
                
                &:hover {
                    transition: all .3s ease-in;
                    
                    g {
                        path#Subtract {
                            fill: none;
                            stroke: black;
                            transition: all .3s ease-in;
                        }
                        
                        rect#circle {
                            fill: none;
                            stroke: #F11C1C;
                            transition: all .3s ease-in;
                        }
                    }
                }
            }

            .shortDetails {
                margin-top: 2rem;

                h6 {
                    font-weight: 400;
                    font-size: 1.5rem;
                    color: #626262;
                    line-height: 2rem;
                    margin-bottom: 1rem;
                }

                h3 {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #333;
                    line-height: 2rem;
                }

                p {
                    font-size: 1rem;
                    font-weight: 400;
                    color: #333;
                    margin-top: 1rem;
                    max-width: 468px;
                }
            }
        }

        .otherDetails {
            display: flex;
            align-items: center;

            @media (max-width: 768px) {
                margin-top: 3rem;
                margin-bottom: 6rem;
            }

            ul {
                list-style: none;

                li {
                    font-weight: 400;
                    font-size: 1.5rem;
                    color: #333;
                    margin-bottom: 2.5rem;

                    @media (max-width: 768px) {
                        font-size: 1.2rem;
                        margin-bottom: 1.5rem;
                    }

                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
`;

export default HeroStyled;