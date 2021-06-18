import Styled from 'styled-components';

export const CaseContainer = Styled.section`
    width: 100%;
    max-width: 1400px;
    min-height: 100vh;
    margin: 0 auto;

    img {
        width: 100%;
        height: auto;
    }

    .container {
        background-color: #FAFAFA;
        padding: 0 8%;
    }

    .grid {
        display: grid;
        grid-template-columns: 30% 70%;
        padding-top: 6rem;
        
        @media (max-width: 768px) {
            grid-template-columns: 100%;
            padding-top: 2rem;
        }

        &:last-child {
            padding-bottom: 6rem;

            @media (max-width: 768px) {
                padding-top: 2rem;
            }
        }

        .content {
            width: 100%;

            &.subgrid {
                display: grid;
                grid-template-columns: 50% 50%;
            }
        }

        h3 {
            color: #001F48;
            font-size: 1.6rem;
            font-weight: 700;
            max-width: 215px;

            @media (max-width: 768px) {
                margin-bottom: 1.5rem;
            }
        }

        p {
            font-weight: 400;
            font-size: 1.5rem;
            color: #727375;
            max-width: 700px;
            margin-bottom: 1.5rem;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }
    }

    .grid50 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 4rem; 
        padding: 6rem 0;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            padding: 2rem 0;
        }
    }

    .linkContainer {
        display: flex;
        justify-content: center;
        
        a.proLink {
            width: 100%;
            text-align: center;
            font-size: 4rem;
            color: #000;
            font-weight: 400;
            margin: 0 auto;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }
    }
`;