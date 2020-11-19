import React, { useState, useEffect } from "react";
import "./TinderCards.css";

import TinderCard from "react-tinder-card";
import database from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    //this is where the code runs once when the component loads, and never again
    database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <h1>TinderCards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>
                {person.name} ({person.age})
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
