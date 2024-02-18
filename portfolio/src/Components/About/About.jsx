import React from "react";
import Skills from "./Skills";
import Cer from "./Cer";
import "./About.css";
import taha from "../../IMG/taha.jpg";
import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        {/* <!-- SEO --> */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="React portfolio" content="Portfolio content" />
        <meta property="og:title" content="React Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/taha123618" />
        {/* <!-- SEO End  --> */}
      </Helmet>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={taha} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub ">REACT DEVELOPER</p>
          <p className="a-desc">
            I Enjoy taking complex problems and turning them in to simple and
            beautiful interface design. I have skills on HTML5, CSS3,
            JavaScript, ES6 , Bootstrap 5, SCSS(CSS pre complier) , Tailwind CSS
            , React, Node JS , Express JS , Mongo DB ,MERN, Jquery. Currently I
            Working as a Web Developer with having more than 1 year of
            experience in the field. My goal is to make every client 100%
            satisfied with my creative work.
          </p>
          <br />
          <a href="Resume(2024).pdf" target="_pdf" className="btn-col">
            Download Resume
          </a>

          {/* <div className="a-award"> */}
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          {/* <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
        </div>
      </div>
      <Skills />
      <Cer />
    </>
  );
};

export default About;
