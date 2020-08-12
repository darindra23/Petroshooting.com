import React from "react";
import useWindowSize from "../helpers/useWindowSize";
import image from "../assets/images/middle.png";
import image2 from "../assets/images/middle2.png";

export default function () {
  const [width, height] = useWindowSize();

  return (
    <div className="middle">
      <img
        src={width <= 1024 && height <= 1024 ? image : image2}
        alt="middle"
      />
    </div>
  );
}
