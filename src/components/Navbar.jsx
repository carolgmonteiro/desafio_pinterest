import React from "react";
import "./Navbar.css";
import axios from "axios";
import Image from "./Image";
import SearchBox from "./SearchBox";
// import BtnNavbar from "./BtnNavbar";
// import BtnNavbarIcon from "./BtnNavbarIcon";

class Navbar extends React.Component {
  state = {
    searchText: "",
    amount: 20,
    apiUrl: "https://pixabay.com/api",
    apiKey: "13902902-ce7912fe8b458917f397c8a5d",
    images: []
  };
  // onTextChange = e => {
  //   const valueSearch = e.target.value;
  //   this.setState({ [e.target.name]: valueSearch }, () => {
  //     if (valueSearch === " ") {
  //       this.setState({ images: [] });
  //     } else {
  //       axios
  //         .get(
  //           `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=all&orientation=vertical&per_page=${this.state.amount}&safesearch=true`
  //         )
  //         .then(res => this.setState({ images: res.data.hits }))
  //         .catch(err => console.log(err));
  //     }
  //   });
  // };
  //guardar el valor del form
  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // const valueSearch = e.target.value;
    // this.setState({ [e.target.name]: valueSearch });
    console.log(e.target.value);
  };

  //para buscar
  handleKeyPress = e => {
    e.preventDefault();
    if (e === " ") {
      this.setState({ images: [] });
    } else {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=all&orientation=vertical&per_page=${this.state.amount}&safesearch=true`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    }

    // if (e.key === "Enter") {
    //   this.searchImg(this.state.searchText);
    //   console.log("enter key pressed", this.state.searchText);
    // }
  };

  // searchImg = searchText => {
  //   axios
  //     .get(
  //       `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=all&orientation=vertical&per_page=${this.state.amount}&safesearch=true`
  //     )
  //     .then(res => res.json())
  //     .then(data => {
  //       return this.setState({ images: data.hits });
  //     })
  //     .catch(err => console.log(err));
  // };

  // searchImg(searchText) {
  //   fetch(
  //     `https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&q=${searchText}image_type=all&orientation=vertical&per_page=20`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       return this.setState({ images: data.hits });
  //     })
  //     .catch(error => console.log("parsing failed", error));
  // }

  render() {
    console.log(this.state.images);
    return (
      <div className="btn-box">
        <button id="btn-pinterest" className="logo-pinterest">
          <img src={require("../img/logo.svg")} alt="logo-pinterest" />
        </button>
        <div className="search-box-content">
          <SearchBox />
          {/* <form className="search-box" onSubmit={this.handleKeyPress}>
            <button className="btn-search">
              <img src={require("../img/search.svg")} alt="search-button" />
            </button>
            <input
              type="search"
              placeholder="Search"
              name="searchText"
              value={this.state.searchText}
              onChange={this.onTextChange}
            />
            {this.state.images.length > 0 ? (
              <Image images={this.state.images} />
            ) : null}
          </form> */}
          <div className="button-content">
            <div className="button-box">
              <button className="btn-nav-name">Home</button>
              <button className="btn-nav-name">Following</button>
              <button className="btn-nav-name">
                <p className="user-icon">C</p>
                <p className="username">Carolina</p>
              </button>
            </div>
            <div className="border"></div>
            <button className="btn-nav">
              <img
                className="icon"
                src={require("../img/chat.svg")}
                alt="chat-button"
              />
            </button>

            <button className="btn-nav">
              <img
                className="icon"
                src={require("../img/bell.svg")}
                alt="notifications-button"
              />
            </button>
            <button className="btn-nav">
              <img
                className="icon"
                src={require("../img/dots.svg")}
                alt="settings-button"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

// class Navbar extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <nav id="navbar" className="header-content">
//           <div className="btn-box">
//             <button id="btn-pinterest" className="logo-pinterest">
//               <img src={require("../img/logo.svg")} alt="logo-pinterest" />
//             </button>
//             <div className="search-box-content">
//               <SearchBox />
//             </div>
//             <div className="button-content">
//               <BtnNavbar />
//               <div className="border"></div>
//               <BtnNavbarIcon />
//             </div>
//           </div>
//           <hr />
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

// export default Navbar;
