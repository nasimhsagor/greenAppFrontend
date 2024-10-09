import React from "react";

const Image = ({ imgSrc, className }) => {
  return (
    <img
      className={className}
      src={imgSrc}
      alt={imgSrc}
      onError={(e) => { e.target.onerror = null; e.target.src = "path/to/placeholder.jpg"; }} // Replace with your placeholder image
    />
  );
};

export default Image;
