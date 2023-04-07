import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatWidget({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: username,
        room: room,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("chatToServer", messageData);
      // setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("chatToClient", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
        <p>Live Chat</p>
      <div>
        <ScrollToBottom>
          {messageList.map((messageContent) => {
            return (
                <li key={messageContent.message}>
                  <p>{messageContent.message}</p>
                  <p>{messageContent.time}</p>
                  <p>{messageContent.sender}</p>
                </li>
            )
          })}
        </ScrollToBottom>
      </div>
      <div>
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onClick={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />

        <button onClick={sendMessage}> send </button>
      </div>
    </div>
  );
}

export default ChatWidget;
