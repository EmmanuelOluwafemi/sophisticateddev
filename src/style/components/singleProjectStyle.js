import Styled from 'styled-components';

export const SingleProjectStyle = Styled.div`
    width: 100%;

    img {
        width: 100%;

        &:hover {
            transform: scale(1.02);
            transition: 1s ease-in-out all;
        }
    }
`;