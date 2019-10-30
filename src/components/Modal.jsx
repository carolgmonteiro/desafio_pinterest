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
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id={"modal" + this.props.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="arrow" data-dismiss="modal" aria-label="Close">
                <img src={require("../img/back.svg")} alt="btn-back" />
              </div>
              <div className="modal-body">
                <img className="img-fluid" src={this.props.url} alt="linked" />
                <div className="modal-infos">
                  <div className="btn-icons-modal">
                    <img src={require("../img/share-black.PNG")} alt="share" />
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
                  <div className="tags">
                    <p>Tags: {this.props.tags}</p>
                  </div>
                  <div className="link-image-modal">
                    <a href={this.props.pageurl} target={"_blank"}>
                      <img
                        src={require("../img/arrow-diagonal.PNG")}
                        alt="share"
                      />
                      {this.props.pageurl.substr(27, 10)}...
                    </a>
                  </div>
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
