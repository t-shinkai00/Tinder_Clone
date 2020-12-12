import React, { useState } from "react";
import "./ChatScreen.css";

import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setinput] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setinput("");
  };
  const [messages, setMessages] = useState([
    {
      name: "Asshley",
      image:
        "https://i.pinimg.com/736x/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg",
      message: "Hey! How are you?",
    },
    {
      name: "Asshley",
      image:
        "https://i.pinimg.com/736x/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg",
      message: "Hey! How are you?",
    },
    {
      message: "Hi! I am doing well.",
    },
  ]);
  return (
    <div className="chatScreen">
      {/* <h1>Chat Screen</h1> */}
      <p className="chatScreen__timeStamp">
        You matched with Asshley on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
