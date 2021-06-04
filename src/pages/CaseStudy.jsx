import React, {useEffect, useState} from 'react';

// Style
import {CaseContainer} from '../style/pages/caseStudyStyle';

// External Library
import { useParams } from 'react-router-dom';
import Img from 'react-cool-img';

// Data
import {Data} from '../utils/caseStudyData';

// Components
import ResearchCard from '../components/ResearchCard';
import IdeaCard from '../components/IdeaCard';
import MobileCaseStudy from '../components/MobileCaseStudy';
import WebCaseStudy from '../components/WebCaseStudy';
import Pagination from '../components/Pagination';

const CaseStudy = () => {
    window.scrollTo(0, 0);
    
    let { id } = useParams();

    const [caseData, setCaseData] = useState([]);

    useEffect(() => {
        setCaseData(Data[id])
    }, [id])

    return (
        <CaseContainer>
            <Img src={caseData.heroBg} alt="project" />
            <Img src={caseData.projectView} alt="project" />

            <div className="container">
                <div className="grid">
                    <h3>Why {caseData.title}?</h3>
                    <div className="content">
                        {
                            caseData.why && caseData.why.map(item => (
                                <p>{item}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="grid">
                    <h3>Aims and Objectives</h3>
                    <div className="content">
                        <p>{caseData.aim}</p>
                    </div>
                </div>
            </div>

            <Img src={caseData.present} alt="project" />

            <div className="container">
                <div className="grid">
                    <h3>Research</h3>
                    <div className="content">
                        <p>{caseData.research}</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>Research Steps</h3>
                    <div className="content subgrid">
                        {
                            caseData.length > 0 && caseData.researchStep.foreach(item => {
                                <p>{item}</p>
                            }) 
                        }
                    </div>
                </div>
            </div>

            {/* Research */}
            <div className="container">
                <div className="grid50">
                    {
                        caseData.quote && caseData.quote.map(item => (
                            <ResearchCard 
                                content={item.text}
                                respondent={`- Respondent ${item.number}`} 
                            />
                        ))
                    }
                    
                </div>
            </div>

            {/* Idea */}

            <Img src={caseData.ideaImg} alt="idea" />

            <div className="container">
                <div className="grid50">
                    {
                        caseData.ideaProcess && caseData.ideaProcess.map(item => (
                            <IdeaCard percent={`${item.number}%`} content={item.text} />
                        ))
                    }
                </div>

                <div className="grid">
                    <h3>User Flow</h3>
                    <div className="content">
                        <p>{caseData.userFlow}</p>
                    </div>
                </div>
            </div>

            <Img src={caseData.userFlowImg} alt="flow" />

            <div className="container">
                <div className="grid">
                    <h3>Sketching and Wireframing</h3>
                    <div className="content">
                        <p>{caseData.sketches}</p>
                    </div>
                </div>
            </div>
            
            <Img src={caseData.sketchImg} alt="sketch"/>

            <div className="container">
                <div className="grid">
                    <h3>Styleguides and Brand Color</h3>
                    <div className="content">
                        <p>{caseData.styleGuide}</p>
                    </div>
                </div>
            </div>

            <Img src={caseData.typography} alt="typography" />

            <div className="container">
                <div className="grid">
                    <h3>Usuability Testing and Iteration</h3>
                    <div className="content">
                        <p>{caseData.testing}</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>Findings</h3>
                    <div className="content">
                        <p>{caseData.finding}</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>High Fidelity</h3>
                    <div className="content">
                        <p>{caseData.fidelity}</p>
                    </div>
                </div>
                {
                    caseData.type === "mobile" &&
                    <div className="grid">
                        <h3>Key Takeaway</h3>
                        <div className="content">
                            <p>{caseData.takeaway}</p>
                        </div>
                    </div>
                }
            </div>

            {
                caseData.type === "mobile" &&
                <>
                    <MobileCaseStudy 
                        title={Data[id] && Data[id].discovery[0].title && Data[id].discovery[0].title}
                        footnote={Data[id] && Data[id].discovery[0].footnote && Data[id].discovery[0].footnote}
                        images={Data[id] && Data[id].discovery[0].images && Data[id].discovery[0].images}
                    />
                    <MobileCaseStudy 
                        title={Data[id] && Data[id].details[0].title && Data[id].details[0].title}
                        footnote={Data[id] && Data[id].details[0].footnote && Data[id].details[0].footnote}
                        images={Data[id] && Data[id].details[0].images && Data[id].details[0].images}
                    />
                    <MobileCaseStudy 
                        title={Data[id] && Data[id].moreDetails[0].title && Data[id].moreDetails[0].title}
                        images={Data[id] && Data[id].moreDetails[0].images && Data[id].moreDetails[0].images}
                    />
                    <MobileCaseStudy 
                        title={Data[id] && Data[id].lastSection[0].title && Data[id].lastSection[0].title}
                        images={Data[id] && Data[id].lastSection[0].images && Data[id].lastSection[0].images}
                    />
                </>
            }

            {
                caseData.type === "web" &&
                <>
                    <Img src={caseData.display} alt="display" />

                    <div className="container">
                        <div className="grid">
                            <h3>Key Takeaway</h3>
                            <div className="content">
                                <p>{caseData.takeaway}</p>
                            </div>
                        </div>
                    </div>

                    <WebCaseStudy images={Data[id] && Data[id].webView } />

                </>
            }
            <div className="linkContainer">
                <a className="proLink" href={caseData.prototype}>View Prototype</a>
            </div>

            <Pagination id={id} length={Data.length} />
        </CaseContainer>
    )
}

export default CaseStudy;