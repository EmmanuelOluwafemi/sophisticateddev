import React from 'react';

import Styled, {keyframes} from 'styled-components'

const Loading = () => {
    return (
        <StyledLoading>
            <div className="loader" />
        </StyledLoading>
    )
}

export default Loading;

const Animate = keyframes`
    from {
        transform: scale(.8);
    }

    to {
        transform: scale(1);
    }
`

const StyledLoading = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .loader {
        width: 30px;
        height: 30px;
        background: #000;
        border-radius: 50%;
        animation: .4s ease-in-out ${Animate} infinite;
    }
`;