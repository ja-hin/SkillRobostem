import React from "react";
import "./hero.css";
import bg from '../../../assets/bg.png'
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">      
            <Title  title='Welcome to Skill Robostem'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quod magnam, eveniet reprehenderit cum iste expedita
              consequatur dolorum earum, esse minus, inventore dolorem voluptas
              illum repudiandae suscipit quisquam similique vero.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button >
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
