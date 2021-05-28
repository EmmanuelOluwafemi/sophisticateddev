import React from 'react';
import Styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Pagination = ({ id, length }) => {

    let history = useHistory();

    let prev = parseInt(id) - 1;
    let next = parseInt(id) + 1;

    const handlePrev = () => {
        
        history.push(`/caseStudy/${prev}`)
        window.location.reload(true)
    }

    const handleNext = () => {
        
        history.push(`/caseStudy/${next}`)
        window.location.reload(true)
    }

    return (
        <StyledPagination>
            <div className="contents">
                {id > 0 && <button onClick={handlePrev}>Prev Case</button>}
                <div></div>
                {parseInt(id) < 1 && <button onClick={handleNext}>Next Case</button>}
            </div>
        </StyledPagination>
    )
}

export default Pagination;

const StyledPagination = Styled.div`
    width: 100%;
    height: 302px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6%;
    
    .contents {
        max-width: 942px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            cursor: pointer;
            font-weight: 400;
            font-size: 1rem;
            background: none;
            border: none;
            outline: none;
            text-decoration: underline;
        }
    }
`;