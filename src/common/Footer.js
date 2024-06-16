import React, { useState } from "react";
import Chatbox from "../Components/Chatbox";

function Footer() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div>
      <ul className="footer">
        <h1 onClick={toggleChatbox} style={{ cursor: "pointer" }}>
          Chat
        </h1>
      </ul>
      {isChatboxVisible && <Chatbox />}
    </div>
  );
}

export default Footer;
