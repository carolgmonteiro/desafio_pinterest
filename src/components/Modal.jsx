import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  render() {
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

                <div className="add">
                  <img src={require("../img/dots.svg")} alt="add" />
                </div>
                <button className="sent">
                  <img className="share" src={require("../img/share.png")} />
                  Send
                </button>
                <div className="btn-save-collection1">
                  <select name="collections">
                    <option>illustration</option>
                    <option>watercolor</option>
                    <option>photos</option>
                    <option>inspiration</option>
                  </select>
                  <button>Save</button>
                </div>
                <div
                  className="closed close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={require("../img/close.svg")} alt="btn-close" />
                </div>
              </div>
              <div className="modal-body">
                <img className="img-fluid" src={this.props.url} alt="" />
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
