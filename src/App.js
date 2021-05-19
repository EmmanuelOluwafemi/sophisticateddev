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


function App() {

  const [menu, setMenu] = useState(false)

  const handleOnclick = () => {
      setMenu(!menu);
  }

  return (
    <Router>
      <Header handleOnclick={handleOnclick} />
      {menu && <Navbar  handleOnclick={handleOnclick}/> }
      <Switch>
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
    </Router>
  );
}

export default App;
