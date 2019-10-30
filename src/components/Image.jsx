import React from "react";
import "./Image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    var imgStyle;
    var otherImgStyle;
    if (this.state.hover) {
      imgStyle = {
        display: "flex",
        position: "absolute",
        top: "10px",
        right: "10px"
      };
      otherImgStyle = { display: "block" };
    } else {
      imgStyle = { display: "none" };
      otherImgStyle = { display: "none" };
    }

    return (
      <React.Fragment>
        <div
          onMouseEnter={() => this.handleHover()}
          onMouseLeave={() => this.handleHover()}
          className="image-container"
        >
          <img
            className="linked-img"
            src={this.props.url}
            alt="link"
            data-target={"#modal" + this.props.dataTarget}
            data-toggle="modal"
          />
          <div style={imgStyle} className="btn-save-collection">
            <select name="collections">
              <option>illustration</option>
              <option>watercolor</option>
              <option>photos</option>
              <option>inspiration</option>
            </select>
            <button>Save</button>
          </div>
          <div className="btn-dots">
            <button>
              <img src={require("../img/dots.svg")} alt="dots" />
            </button>
          </div>
          <div className="link-content" style={otherImgStyle}>
            <div className="btn-share">
              <img src={require("../img/share.png")} alt="share" />
            </div>
            <div className="link-image">
              <a href={this.props.pageurl} target={"_blank"}>
                {this.props.pageurl.substr(27, 10)}...
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Image;
