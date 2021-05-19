import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Header from "./components/Header";
import Navbar from "./components/Navbar";


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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home handleOnclick={handleOnclick} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
