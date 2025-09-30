import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to our restaurant! We are passionate about creating memorable dining experiences by serving fresh, flavorful dishes made from high-quality ingredients. Whether you’re joining us for a casual meal, a family gathering, or a special celebration, our team is dedicated to offering warm hospitality, a welcoming atmosphere, and food that brings people together.
            </p>
            <Link to={"/"}>Explore Menu{" "}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
  );
};

export default About;