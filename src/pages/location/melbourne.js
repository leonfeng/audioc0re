import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MelbournePage = () => {
  return (
    <>
      <h1>Melbourne</h1>
      <StaticImage
        src="../../images/linda-xu-09eoscPYdHU-unsplash.jpg"
        alt="cityscape near canal with outdoor lamps under night sky"
        placeholder="blurred"
        width={1184}
        height={784}
      />
    </>
  );
};

export default MelbournePage;
