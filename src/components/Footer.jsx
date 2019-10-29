import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div>
          <button className="btn-plus">
            <i>+</i>
          </button>
        </div>
        <div>
          <button className="btn-question">
            <i>?</i>
          </button>
        </div>
      </section>
    );
  }
}

export default Footer;
