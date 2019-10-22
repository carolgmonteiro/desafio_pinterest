import React from "react";
// import Navbar from "./components/Navbar";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Image from "./components/Image";
import Modal from "./components/Modal";

// import SearchBox from "../src/components/SearchBox";
// import BtnNavbar from "../src/components/BtnNavbar";
// import BtnNavbarIcon from "../src/components/BtnNavbarIcon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentPage: 1,
      query: ""
    };
    this.fetchData = this.fetchData.bind(this);
    this.showImg = this.showImg.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&image_type=all&orientation=vertical&per_page=20"
    )
      .then(response => response.json())
      .then(data => {
        return this.setState({ images: data.hits });
      })
      .catch(error => console.log("parsing failed", error));
  }

  fetchData() {
    const { currentPage } = this.state;
    this.setState({ currentPage: this.state.currentPage + 1 });
    fetch(
      `https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&image_type=all&orientation=vertical&page=${currentPage}&per_page=20`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ images: this.state.images.concat(data.hits) })
      )
      .catch(error => console.log("parsing failed", error));
  }

  showImg() {
    return this.state.images.map((image, i) => {
      return <Image dataTarget={image.id} key={i} url={image.webformatURL} />;
    });
  }

  showModal() {
    return this.state.images.map((image, i) => {
      // console.log(image);
      return <Modal id={image.id} key={i} url={image.webformatURL} />;
    });
  }

  // searchImg(query) {
  //   fetch(
  //     `https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&q=${query}image_type=all&orientation=vertical&per_page=20`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(query);
  //       return this.setState({ images: data.hits });
  //     })
  //     .catch(error => console.log("parsing failed", error));
  // }

  render() {
    const breakpointColumnsObj = {
      default: 5,
      1100: 4,
      700: 2,
      500: 1
    };

    return (
      <React.Fragment>
        <nav id="navbar" className="header-content">
          <div className="btn-box">
            <button id="btn-pinterest" className="logo-pinterest">
              <img src={require("../src/img/logo.svg")} alt="logo-pinterest" />
            </button>
            <div className="search-box-content">
              <div className="search-box">
                <button className="btn-search">
                  <img
                    src={require("../src/img/search.svg")}
                    alt="search-button"
                  />
                </button>
                <input type="text" placeholder="Search" />
              </div>
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
                    src={require("../src/img/chat.svg")}
                    alt="chat-button"
                  />
                </button>

                <button className="btn-nav">
                  <img
                    className="icon"
                    src={require("../src/img/bell.svg")}
                    alt="notifications-button"
                  />
                </button>
                <button className="btn-nav">
                  <img
                    className="icon"
                    src={require("../src/img/dots.svg")}
                    alt="settings-button"
                  />
                </button>
              </div>
            </div>
          </div>
          <hr />
        </nav>
        {this.showModal()}
        <div className="images-container">
          <InfiniteScroll
            dataLength={this.state.images.length}
            next={this.fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {this.showImg()}
            </Masonry>
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
