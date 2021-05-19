import Styled from 'styled-components';

export const ProjectsContainer = Styled.section`
    width: 100%;
    max-width: 100vw;
    margin: 4rem 0;

    h3 {
        font-weight: 700;
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 4rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6rem 10rem;

        @media (max-width: 1200px) {
            grid-gap: 6rem 6rem;
        }

        @media (max-width: 1000px) {
            grid-gap: 6rem 4rem;
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 4rem;
        }

        h5 {
            font-weight: 400;
            font-size: 1rem;
            color: #333;
            margin-top: 4rem;
        }

        p {
            font-weight: 400;
            font-size: 1.5rem;
            margin-top: 1.5rem;
            max-width: 375px;
            color: #333;

            &.soon {
                font-size: 1rem;
                font-weight: 400;
                color: #474747;
                margin-top: 1.3rem;
            }
        }
    }
`;