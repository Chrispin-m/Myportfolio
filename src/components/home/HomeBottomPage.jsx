import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiLinktree } from "react-icons/si";
import { Button } from "@mui/material";

const resumeURL ="https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom">
      <h1
        style={{ fontSize: "2.6rem", marginBottom: "1rem", marginTop: "-9rem" }}
        className="homeBottom-title"
      >
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Crispine Mwangi, An Information Technology and Engineering Student with
            good, <span style={{ color: "#32CD30" }}>problem solving </span>
            skills & passionate about BlockChain and Software  development
          </p>
          <br />
          <p>
            I love working as a{" "}
            <span style={{ color: "#32CD30" }}>Backend Developer</span> and
            My tech stack includes Django, VueJs, NodeJs, Express.js, React, TypeScript.
          </p>
          <br />
          <p>
            I am also proficient in PHP, Python, JavaScript and love{" "}
            <span style={{ color: "#32CD30" }}>solving problems</span> involving
            data structures and algorithms.
          </p>
          <br />
          <p>
            I'm also an active participant in various{" "}
            <span style={{ color: "#32CD30" }}>open source programs </span> such
            as{" "}
            <span style={{ color: "#32CD30" }}>
               Devpost{" "}
            </span>
            I contributed 9 successful pull requests to different projects
            during recent{" "}
            <span style={{ color: "#32CD30" }}>Hackerank  hackathon programe</span> and
            earned rewards and Swags.
          </p>
          <br />
          <p>
            I love making side projects and learn about new{" "}
            <span style={{ color: "#32CD30" }}>technologies</span>.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>social links</span>{" "}
            for more about me.{" "}
          </p>
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
     
    </div>
  );
};

export default HomeBottomPage;
