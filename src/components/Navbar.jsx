import React from "react";
import "./Navbar.css";
import SearchBox from "./SearchBox";
import BtnNavbar from "./BtnNavbar";
import BtnNavbarIcon from "./BtnNavbarIcon";
// import { Row } from "reactstrap";
// import { Col } from "reactstrap";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav id="navbar" className="header-content">
          <div className="btn-box">
            <button id="btn-pinterest" className="logo-pinterest">
              <img src={require("../img/logo.svg")} alt="logo-pinterest" />
            </button>
            <div className="search-box-content">
              <SearchBox />
            </div>
            <div className="button-content">
              <BtnNavbar />
              <div className="border"></div>
              <BtnNavbarIcon />
            </div>
          </div>
          <hr />
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
