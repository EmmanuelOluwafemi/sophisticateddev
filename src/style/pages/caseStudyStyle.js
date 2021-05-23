import Styled from 'styled-components';

export const CaseContainer = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;

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
        }

        &:last-child {
            padding-bottom: 6rem;
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
            font-size: 1.5rem;
            font-weight: 700;
            max-width: 215px;

            @media (max-width: 768px) {
                margin-bottom: 1.5rem;
            }
        }

        p {
            font-weight: 400;
            font-size: 1.3rem;
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
        }
    }
`;