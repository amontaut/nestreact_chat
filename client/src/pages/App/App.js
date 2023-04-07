import React, { useState } from "react";
import io from "socket.io-client";
import ChatWidget from "../../component/ChatWidget";

const socket = io.connect("http://localhost:3001/chat");

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (name !== "" && room !== "") {
      socket.emit("joinRoom", room);
      setShowChat(true);
    }
  };

  return (
    <div>
      {!showChat ? (
        <div>
            <h1> Join A Chat </h1>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label>Room ID</label>
              <input
                type="text"
                placeholder="Room ID..."
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              <button onClick={joinRoom} > Join </button>
        </div>
      ) : (
        <ChatWidget socket={socket} username={name} room={room} />
      )}
    </div>
  );
}

export default App;
