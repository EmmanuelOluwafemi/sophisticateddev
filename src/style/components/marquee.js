import Styled, {keyframes} from 'styled-components';

const slide = keyframes`
  from {
    left: 0;
  }

  to {
    left: -100%;
  }
`;

export const MarqueeContainer = Styled.section`
    margin: 124px 0; 

    @media (max-width: 768px) {
        margin: 48px 0;
    }
`;

export const MarqueeStyle = Styled.section`
    width: 100vw;
    height: 140px;
    position: relative;
    display:flex; 
    align-items:center;
    overflow-x: hidden;

    .wrapper {
        width: 200%;
        position: absolute;
        white-space: nowrap;
        padding: 0;
        animation: ${slide} 20s linear infinite;

        span {
            font-weight: 600;
            font-size: 3rem;
            line-height: 3.4rem;
            color: #000;
            margin-right: 6rem;

            &.outline {
                -webkit-text-stroke: 1px black;
                color: #FAFAFA;
                opacity: .5;
            }


            @media (max-width: 768px) {
                font-size: 2.5rem;
            }
        }
    }

    &.new {
        .wrapper {
            animation: ${slide} 30s linear infinite;
        }
    }
`;