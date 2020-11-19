import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      {/* <h1>Lets build the tinder clone app!</h1> */}
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <TinderCards />
          </Route>
          <Route path="/chat">
            <h1>I am chat.</h1>
          </Route>
          {/* Tinder Cards */}
          {/* Butoons below tinder cards */}

          {/* Chats screen */}
          {/* Individual chat screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
