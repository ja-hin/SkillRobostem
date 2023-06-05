import React from "react";
import { useLocation } from "react-router";
import aboutimg from "../../../../src/assets/about.png";

const Back = ({ title }) => {
  const location = useLocation();
  return (
    <div className="aboutus">
      <section className="back">
        <div className="text">
          <h2>Home/{location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>
          {/* <h3>WELCOME</h3>
          <p>
            Skillrobostem Private Limited is an educational startup to
            introduce Robotics, IoT, Artificial Intelligence, and Drones to
            students with Hand-on experience. The Initiative to start this
            company is to improve the Technical knowledge for a better tomorrow
            and make them future-ready with next Generation Skills.
          </p> */}
          
        </div>
      </section>
      <div className="container1">
        <img src={aboutimg} alt="imgpng" />
      </div>
    </div>
  );
};

export default Back;
