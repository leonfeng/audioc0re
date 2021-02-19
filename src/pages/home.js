import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <StaticImage
        src="../images/sebastian-banasiewcz-oXXc-s5nNy8-unsplash.jpg"
        alt="A pair of headphones"
        placeholder="blurred"
        width={711}
        height={889}
      />
    </>
  );
};

export default HomePage;
