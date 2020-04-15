import React from 'react';
import Navigation from "./components/layout/Navigation";
import Joke from "./components/Joke";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Joke />
    </div>
  );
}

export default App;
