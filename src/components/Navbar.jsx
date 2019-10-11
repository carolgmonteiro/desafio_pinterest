import React from "react";
import "./Navbar.css";
// import { Row } from "reactstrap";
// import { Col } from "reactstrap";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav id="navbar" className="header-content">
          <button id="btn-pinterest" className="logo-pinterest">
            <img
              src={require("../img/logo-pinterest.png")}
              alt="logo-pinterest"
            />
          </button>

          <div className="search-box">
            <button className="btn-search">
              <img src={require("../img/search.svg")} alt="search-button" />
            </button>
            <input type="text" placeholder="Search" />
          </div>
          <div className="button-content">
            <button className="btn-nav">Home</button>
            <button className="btn-nav">Following</button>
            <button className="btn-nav">
              <p className="user-icon">C</p>Carolina
            </button>
            <div className="border"></div>
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
            <hr />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
