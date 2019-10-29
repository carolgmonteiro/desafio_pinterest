import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Image from "./components/Image";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentPage: 1,
      search: ""
    };
    // this.clickSearch = this.clickSearch.bind(this);
    // this.searchValue = this.searchValue.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.showImg = this.showImg.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&image_type=all&orientation=vertical&per_page=20&safesearch=true"
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
      `https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&image_type=all&orientation=vertical&page=${currentPage}&per_page=20&safesearch=true`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ images: this.state.images.concat(data.hits) })
      )
      .catch(error => console.log("parsing failed", error));
  }

  showImg() {
    return this.state.images.map((image, i) => {
      return (
        <Image
          dataTarget={image.id}
          key={i}
          url={image.webformatURL}
          pageurl={image.pageURL}
        />
      );
    });
  }

  showModal() {
    return this.state.images.map((image, i) => {
      // console.log(image);
      return (
        <Modal
          id={image.id}
          key={i}
          url={image.webformatURL}
          pageurl={image.pageURL}
          tags={image.tags}
        />
      );
    });
  }

  // //guardar el valor del form
  // searchValue=(e)=> {
  //   this.setState({ search: e.target.value });
  //   console.log({ search: e.target.value });
  // }

  // //para buscar
  // clickSearch= (e) => {
  //   // e.preventDefault();
  //   if (e.key === "Enter") {
  //     this.searchImg(this.state.search);
  //     console.log("enter key pressed", this.state.search);
  //   }
  // }

  // searchImg(search) {
  //   fetch(
  //     `https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&q=${search}image_type=all&orientation=vertical&per_page=20`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
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
          <Navbar
          // searchValue={this.searchValue}
          // clickSearch={this.clickSearch}
          />
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
