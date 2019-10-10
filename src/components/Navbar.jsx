import React from "react";
import "./Navbar.css";
// import { Row } from "reactstrap";
// import { Col } from "reactstrap";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-content">
          <div className="header-box">
            <a href="/">
              <img
                className="logo"
                src={require("../img/logo-pinterest.png")}
                alt="logo-pinterest"
              />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
