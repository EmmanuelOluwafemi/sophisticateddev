import Styled from 'styled-components';

export const AboutContainer = Styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 120px 6%;

    @media (max-width: 768px) {
        padding: 48px 6%;
        margin-bottom: 128px;
    }

    .row {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 32px;

        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .card {
            width: 100%;
            height: 100%;

            &.mobile {
                display: none;

                @media (max-width: 768px) {
                    display: block;
                    margin-bottom: 4rem;
                }
            }

            &.web {
                display: block;

                @media (max-width: 768px) {
                    display: none;
                }
            }

            img {
                width: 100%;
                height: auto;
            }

            svg {
                width: 100%;
                max-width: 210px;
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

            .about-content {
                width: 100%;
                margin-top: 56px;

                p {
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5rem;
                    max-width: 480px;
                    color: #606060;
                    margin-bottom: 1.5rem;

                    span {
                        font-weight: 700;
                        color: #606060;
                    }

                    a {
                        cursor: pointer;

                        &:hover {
                            color: black;
                        }
                    }
                }

                h5 {
                    font-size: 1.5rem;
                    color: #606060;

                    a {
                        cursor: pointer;

                        &:hover {
                            color: #000;
                        }
                    }
                }
            }
        }
    }
`;