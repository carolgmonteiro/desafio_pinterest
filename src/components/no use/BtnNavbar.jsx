import React from "react";
import "./BtnNavbar.css";

class BtnNavbar extends React.Component {
  render() {
    return (
      <div className="button-box">
        <button className="btn-nav-name">Home</button>
        <button className="btn-nav-name">Following</button>
        <button className="btn-nav-name">
          <p className="user-icon">C</p>
          <p className="username">Carolina</p>
        </button>
      </div>
    );
  }
}

export default BtnNavbar;
