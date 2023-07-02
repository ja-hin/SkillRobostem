import React from "react";
import "./hero.css";
import bg from "../../../assets/bg.png";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title title="Welcome to Skill Robostem" />
            <p>
              Skillrobostem Private Limited is an educational startup to
              introduce Robotics, IoT, Artificial Intelligence, and Drones to
              students with Hand-on experience.The Initiative to start this
              company is to improve the Technical knowledge for a better
              tomorrow and make them future ready with next Generation Skills.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE<i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="imgg">
          <img src={bg} alt="bg" className="img" />
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
