import React from "react";
import "./SearchBox.css";
import axios from "axios";
import ImageResults from "./ImageResults";

class SearchBox extends React.Component {
  state = {
    searchText: "",
    amount: 20,
    apiUrl: "https://pixabay.com/api",
    apiKey: "13902902-ce7912fe8b458917f397c8a5d",
    images: []
  };
  onTextChange = e => {
    const valueSearch = e.target.value;
    this.setState({ [e.target.name]: valueSearch }, () => {
      if (valueSearch === " ") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=all&orientation=vertical&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    console.log(this.state.images);
    return (
      <form className="search-box">
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
        {/* {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null} */}
      </form>
    );
  }
}

export default SearchBox;

// //guardar el valor del form
// onTextChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
//   // const valueSearch = e.target.value;
//   // this.setState({ [e.target.name]: valueSearch });
//   console.log(e.target.value);
// };

// //para buscar
// handleKeyPress = e => {
//   e.preventDefault();
//   if (e.key === "Enter") {
//     this.searchImg(this.state.searchText);
//     console.log("enter key pressed", this.state.searchText);
//   }
// };

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
