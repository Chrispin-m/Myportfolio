import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <div style={{ height: "100%" }}>
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Backend Developer",
            "Web3 Developer",
            "Curious Learner",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default TypeAnimation;
