import React from "react";
import SecondaryCover from "../../Layout/SecondaryCover";
import AboutUs from "./AboutUs";
import Members from "./Members";

function About() {
  return (
    <>
      <SecondaryCover
        title="About"
        description="We are a non-profital organization focusing on child education with
            technology."
      />
      <AboutUs />
      <Members />
    </>
  );
}

export default About;
