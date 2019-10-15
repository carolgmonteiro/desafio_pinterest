import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Image from "./components/Image";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: "",
      count: 1
    };
    this.fetchData = this.fetchData.bind(this);
    this.showImg = this.showImg.bind(this);
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
    const { count } = this.state;
    this.setState({ count: this.state.count + 1 });
    fetch(
      `https://pixabay.com/api/?key=13902902-ce7912fe8b458917f397c8a5d&image_type=all&orientation=vertical&page=${count}&per_page=20`
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

  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
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
