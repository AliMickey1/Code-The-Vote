import React from "react";

function Chatbox() {
  return (
    <div id="chatbox" className="chatbox-visible">
      <div className="chatbox-header">
        <span>Chat with us!</span>
        <button
          onClick={() =>
            document
              .getElementById("chatbox")
              .classList.remove("chatbox-visible")
          }
        >
          X
        </button>
      </div>
      <div className="chatbox-body">
        <p>Welcome to the chat!</p>
      </div>
      <div className="chatbox-footer">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chatbox;
