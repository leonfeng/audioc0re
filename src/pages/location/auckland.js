import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const AucklandPage = () => {
  return (
    <>
      <h1>Auckland</h1>
      <StaticImage
        src="../../images/caleb-shong-Rom5W-7hKCs-unsplash.jpg"
        alt="bridge with lights over body of water at nighttime"
        placeholder="blurred"
        width={1184}
        height={789}
      />
    </>
  );
};

export default AucklandPage;
