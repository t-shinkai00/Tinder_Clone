import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* <h1>Lets build the tinder clone app!</h1> */}
      {/* Header */}
      <Router>
        <Switch>
          <Route path="/chat/:preson">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
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
