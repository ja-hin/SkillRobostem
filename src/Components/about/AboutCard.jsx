import React from "react";
import Title from "../common/title/Title";
import about2 from "../../assets/ABOUT2.png";
import { homeAbout } from "../../dummydata";
import "./about.css";
const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="aboutclass">
          <div className="container3 ">
            <img src={about2} alt="" />
          </div>
          <div className="right">
            <div className="hei">
            <Title
              Subtitle="LEARN ANYTHING"
              title="BENIFITS ABOUT ONLINE LEARNING EXPERTISE"
            />
            <div className="itemss">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img1">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="textt">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default AboutCard;
