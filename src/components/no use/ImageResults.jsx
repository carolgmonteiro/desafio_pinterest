import React from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import Image from "../Image";
import Modal from "../Modal";

class ImageResults extends React.Component {
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <Masonry>
          {images.map(img => (
            <Image
              dataTarget={img.tags}
              key={img.id}
              url={img.webformatURL}
              pageurl={img.pageURL}
            ></Image>
          ))}
        </Masonry>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
