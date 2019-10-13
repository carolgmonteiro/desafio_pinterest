import React from "react";
import "./BtnNavbarIcon.css";

class BtnNavbarIcon extends React.Component {
  render() {
    return (
      <>
        <>
          <button className="btn-nav">
            <img
              className="icon"
              src={require("../img/chat.svg")}
              alt="chat-button"
            />
          </button>
        </>
        <>
          <button className="btn-nav">
            <img
              className="icon"
              src={require("../img/bell.svg")}
              alt="notifications-button"
            />
          </button>
        </>
        <>
          <button className="btn-nav">
            <img
              className="icon"
              src={require("../img/dots.svg")}
              alt="settings-button"
            />
          </button>
        </>
      </>
    );
  }
}

export default BtnNavbarIcon;
