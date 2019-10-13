import React from "react";
import "./BtnNavbarIcon.css";

class BtnNavbarIcon extends React.Component {
  render() {
    return (
      <>
        <div className="btn-chat">
          <button className="btn-nav">
            <img
              className="icon"
              src={require("../img/chat.svg")}
              alt="chat-button"
            />
          </button>
        </div>
        <div className="btn-notifications">
          <button className="btn-nav">
            <img
              className="icon"
              src={require("../img/bell.svg")}
              alt="notifications-button"
            />
          </button>
        </div>
        <div className="btn-settings">
          <button className="btn-nav">
            <img
              className="icon"
              src={require("../img/dots.svg")}
              alt="settings-button"
            />
          </button>
        </div>
      </>
    );
  }
}

export default BtnNavbarIcon;
