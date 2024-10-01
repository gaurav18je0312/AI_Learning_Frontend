import React from "react";
import "./Chatbot.css";
import logo from "../../assets/gemini_logo.png";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";

function Chatbot() {
  return (
    <div className="chatbot">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="chatbot-header-title">
            <div className="chatbot-logo">
              <img src={logo} alt="Logo" width={"70%"} height={"70%"} />
            </div>
            <div className="chatbot-title">
              <div className="chatbot-name">Teacher.ai</div>
              <div className="chatbot-name-footer">
                Powered By Google Gemini
              </div>
            </div>
          </div>
        </div>
        <div className="chatbot-body">
          <div className="chatbot-bot-message">Hi 👋, How can I help you?</div>
          <div className="chatbot-user-message">Hello</div>
          <div className="chatbot-bot-option">summary? 😉</div>
        </div>
        <div className="chatbot-footer">
          <hr />
          <div className="chatbot-footer-input">
            <input type="text" placeholder="Ask a question..." />
            <Fab color="primary" aria-label="Send">
              <SendIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
