import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     images: []
  //   };
  //   this.imageURL = this.imageURL.bind(this);
  // }
  // imageURL() {
  //   return this.state.images.map((image, i) => {
  //     return <Modal dataTarget={image.id} key={i} url={image.pageURL} />;
  //   });
  // }
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
          className="modal fade"
          id={"modal" + this.props.id}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div
                  className="arrow close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={require("../img/back.svg")} alt="btn-back" />
                </div>

                {/* <div className="btn-dots-modal">
                  <img src={require("../img/dots-black.PNG")} alt="dots" />
                </div>

                <div className="btn-share-modal">
                  <img src={require("../img/share-black.PNG")} alt="share" />
                </div>

                <div className="btn-save-collection-modal">
                  <select name="collections">
                    <option>illustration</option>
                    <option>watercolor</option>
                    <option>photos</option>
                    <option>inspiration</option>
                  </select>
                  <button>Save</button>
                </div> */}
              </div>
              <div className="modal-body">
                <img
                  className="img-fluid"
                  src={this.props.url}
                  alt=""
                  onMouseEnter={() => this.handleHover()}
                  onMouseLeave={() => this.handleHover()}
                />

                <div className="modal-infos">
                  <div className="btn-dots-modal">
                    <img src={require("../img/share-black.PNG")} alt="share" />
                  </div>
                  <div className="btn-dots-modal">
                    <img src={require("../img/dots-black.PNG")} alt="dots" />
                  </div>

                  <div className="btn-save-collection-modal">
                    <select name="collections">
                      <option>illustration</option>
                      <option>watercolor</option>
                      <option>photos</option>
                      <option>inspiration</option>
                    </select>
                    <button>Save</button>
                  </div>
                </div>
                <div className="link-image-modal">
                  <button>{this.props.url.substr(8, 20) + "..."}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
