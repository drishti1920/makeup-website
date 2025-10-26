import React from "react";
import "./PhotoGrid.css";
import grid1 from "../../../assets/images/grid1.png";
import grid2 from "../../../assets/images/grid2.png";
import grid3 from "../../../assets/images/grid3.png";
import grid4 from "../../../assets/images/grid4.png";
import grid5 from "../../../assets/images/grid5.png";

const PhotoGrid = () => {

   const images = [
      { src: grid1, alt: "Gallery image 1" },
      { src: grid2, alt: "Gallery image 2" },
      { src: grid3, alt: "Gallery image 3" },
      { src: grid4, alt: "Gallery image 4" },
      { src: grid5, alt: "Gallery image 5" },
    ];

  return (
    <div className="gallery-grid-wrapper">
      {images.map((image, index) => (
        <div key={index} className="picture-container">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
