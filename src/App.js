import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Joke from "./components/Joke";
import About from "./components/pages/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" exact component={Joke} />
        <Route path ="/about" exact component={About} />
      </Router>
    </div>
  );
}

export default App;
