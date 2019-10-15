import React from "react";
import "./SearchBox.css";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        <button className="btn-search">
          <img src={require("../img/search.svg")} alt="search-button" />
        </button>
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchBox;
