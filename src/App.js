import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


// Pages

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Random from './pages/Random';
// import Test from './pages/Test';
// import Test2 from './pages/Test2';


function App() {

  const [menu, setMenu] = useState(false)

  const handleOnclick = () => {
      setMenu(!menu);
      console.log(menu)
  }

  return (
    <Router>
      <div className="scroller">
      <Header handleOnclick={handleOnclick} />
      {menu && <Navbar  handleOnclick={handleOnclick}/> }
      <Switch>
          <Route path="/caseStudy/:id">
            <CaseStudy />
          </Route>
          {/* <Route path="/test2">
            <Test2 />
          </Route> */}
          {/* <Route path="/test">
            <Test />
          </Route> */}
          <Route path="/random">
            <Random />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home handleOnclick={handleOnclick} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
