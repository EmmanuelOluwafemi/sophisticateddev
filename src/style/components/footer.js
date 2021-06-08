import Styled from 'styled-components';
import pattern from '../../assets/images/gridWhite.png';

export const FooterStyled = Styled.footer`
    width: 100%;
    max-width: 100vw;
    min-height: 468px;
    padding: 2.5rem 8%;
    padding-top: 5rem;
    background: #000;
    background-image: url(${pattern});

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
        @media (max-width: 768px) {
            grid-template-columns: 100%;
            width: 100%;
        }

        .logo {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            @media (max-width: 768px) {
                justify-content: center;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            @media (max-width: 768px) {
                align-items: center;
                margin-top: 4rem;
            }

            img {
                width: 36px;
                height: auto;
                margin-bottom: 1.5rem;
            }

            p {
                max-width: 426px;
                color: #E6E6E6;
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.5rem;
                margin-bottom: 1.5rem;

                @media (max-width: 768px) {
                    text-align: center;
                }
            }

            a {
                font-size: 2.1rem;
                font-weight: 900;
                color: #fff;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                }
            }
        }
    }

    .foot_note {
        text-align: center;
        color: #7D7D7D;
        font-weight: 400;
        font-size: 1rem;
        margin-top: 8.3rem;

        a {
            color: #7D7D7D;

            &:hover {
                color: #fff;
            }
        }

        @media (max-width: 768px) {
            margin-top: 4rem;
        }
    }
`;