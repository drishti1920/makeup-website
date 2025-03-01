import React from "react";
import "./Gallery.css";
import Heading from "../../components/common/heading/Heading";

const Gallery = () => {
  const images = [
    [
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg",
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg",
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg",
    ],
    [
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg",
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg",
    ],
    [
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg",
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg",
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg",
    ],
  ];
  return (
    <div className="GalleryPage">
      <Heading heading="Gallery" />
      <div className="album">
        <div className="responsive-container-block bg">
          {images.map((group, index) => (
            <div className="responsive-container-block img-cont" key={index}>
              {group.map((src, imgIndex) => (
                <img
                  key={imgIndex}
                  className={`img ${group.length === 2 ? "img-big" : ""} ${
                    imgIndex === group.length - 1 ? "img-last" : ""
                  }`}
                  src={src}
                  alt="Gallery"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
