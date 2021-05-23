import React from 'react';

// Style
import {CaseContainer} from '../style/pages/caseStudyStyle';

// Components
import ResearchCard from '../components/ResearchCard';
import IdeaCard from '../components/IdeaCard';

// images
import heroBg from '../assets/images/foodNation/heroBg.jpg';
import projectView from '../assets/images/foodNation/projectView.jpg';
import present from '../assets/images/foodNation/present1.jpg';
import idea from '../assets/images/foodNation/ideas.jpg';
import flow from '../assets/images/foodNation/flow.jpg';
import sketch from '../assets/images/foodNation/sketch.jpg';
import typography from '../assets/images/foodNation/typography.jpg';

const CaseStudy = () => {
    return (
        <CaseContainer>
            <img src={heroBg} alt="project" />
            <img src={projectView} alt="project" />

            <div className="container">
                <div className="grid">
                    <h3>Why Food Nation?</h3>
                    <div className="content">
                        <p>The online food community is catering for 
                        different needs and also constrained with the 
                        need to make the customer’s digital serving 
                        experience have a very similar feel to one 
                        of the physical experience.</p>
                        <p>Many orders have been cancelled and 
                        revenue lost because of the uncertainty 
                        around the delivery of food</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>Aims and Objectives</h3>
                    <div className="content">
                        <p>Have a simple intuitive application 
                        where people order, track and get their 
                        meal in few clicks of a button..</p>
                    </div>
                </div>
            </div>

            <img src={present} alt="project" />

            <div className="container">
                <div className="grid">
                    <h3>Research</h3>
                    <div className="content">
                        <p>Research plans were drawn out, both secondary 
                        and primary research in other to feel the pulse 
                        of the users, understand what they feel when 
                        trying to get food and how they currently 
                        solve the issues they face.</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>Research Steps</h3>
                    <div className="content subgrid">
                        <p>Understand Problem</p>
                        <p>Analyse Competitors</p>
                        <p>Create User Persona</p>
                        <p>Research latest UX Trends</p>
                        <p>Define Use cases</p>
                        <p>Interview a few users</p>
                        <p>Define project scope</p>
                    </div>
                </div>
            </div>

            {/* Research */}
            <div className="container">
                <div className="grid50">
                    <ResearchCard 
                        content="Getting food delivered to me is always a hassle and I have to wait for a long time to be able to eat what I ordered." 
                        respondent="- Respondent 1" 
                    />
                    <ResearchCard 
                        content="This app I use in ordering food is so cluttered with unnecessary information that I can’t even order a meal as fast as I want." 
                        respondent="- Respondent 2" 
                    />
                    <ResearchCard 
                        content="All the food apps I tried using are not in my location. It’s not funny because I don’t have time to make my own meals. " 
                        respondent="- Respondent 3" 
                    />
                    <ResearchCard 
                        content="I need to know where my ordered meal is and when it will arrive. This helps me organize my movement or set delegation." 
                        respondent="- Respondent 4" 
                    />
                </div>
            </div>

            {/* Idea */}

            <img src={idea} alt="idea" />

            <div className="container">
                <div className="grid50">
                    <IdeaCard percent="80%" content="of our respondent have had ordered food with a mobile application at least once." />
                    <IdeaCard percent="90%" content="out of 30 food applications does not have an active order tracker to manage orders." />
                    <IdeaCard percent="50%" content="of our respondents have been disappionted by food vendors atleast twice." />
                    <IdeaCard percent="30%" content="of our respondents said they will" />
                </div>

                <div className="grid">
                    <h3>User Flow</h3>
                    <div className="content">
                        <p>The information gathered from the research is used in setting out the 
                        important levels of the application. A user flow is drawn to guide the 
                        layout of the application.</p>
                    </div>
                </div>
            </div>

            <img src={flow} alt="flow" />

            <div className="container">
                <div className="grid">
                    <h3>Sketching and Wireframing</h3>
                    <div className="content">
                        <p>From the user flow, initial sketches were made in order to get a 
                        clearer picture of how the design would be and also help in quick 
                        testing. Here a lot of changes were made and effected.</p>
                    </div>
                </div>
            </div>
            
            <img src={sketch} alt="sketch" />

            <div className="container">
                <div className="grid">
                    <h3>Styleguides and Brand Color</h3>
                    <div className="content">
                        <p>I chose a vibrant color and made a logo to go with it. This was consistently 
                        used across the design and a style guide was made.</p>
                    </div>
                </div>
            </div>

            <img src={typography} alt="typography" />

            <div className="container">
                <div className="grid">
                    <h3>Usuability Testing and Iteration</h3>
                    <div className="content">
                        <p>The first designs were done and shared with a few friends of mine, 
                        they gave their observations and I went ahead to make those changes. 
                        The user flow was also modified to improve the user experience.</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>Findings</h3>
                    <div className="content">
                        <p>People will always eat, but the experience matters, especially 
                        when it comes to food. It has to be what they want, how they 
                        want it, and when they want it.</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>High Fidelity</h3>
                    <div className="content">
                        <p>The stage is now set for the high fidelity of the 
                        application, putting into consideration all the design 
                        decisions and sketches made.</p>
                    </div>
                </div>
                <div className="grid">
                    <h3>Key Takeaway</h3>
                    <div className="content">
                        <p>Considering your audience is very key in 
                        building truly what they need. I started off with 
                        some assumptions that were very wrong and as I conversed 
                        with people I found out that my thought process 
                        was flawed. I am really not my users.</p>
                    </div>
                </div>
            </div>
        </CaseContainer>
    )
}

export default CaseStudy;