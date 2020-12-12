import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Asshley"
        message="Hey! How are you?"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/736x/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg"
      />
      <Chat
        name="Lora"
        message="Whats up?"
        timestamp="55 minutes ago"
        profilePic="https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="2 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj1pgSk6CZaG0JeAbpeL0N-bgrpp8TC14ew&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
