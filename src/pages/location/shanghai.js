import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ShanghaiPage = () => {
  return (
    <>
      <h1>Shanghai</h1>
      <StaticImage
        src="../../images/alejo-meza-H23f-2byY_E-unsplash.jpg"
        alt="Shanghai skyline at night"
        placeholder="blurred"
        width={1184}
        height={652}
      />
    </>
  );
};

export default ShanghaiPage;
