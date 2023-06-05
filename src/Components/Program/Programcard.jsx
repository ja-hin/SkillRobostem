import React from "react";
import { coursesCard } from "../../dummydata";
import "./Program.css";

const Programcard = () => {
  return (
    <>
      <section className="courseCard">
        <div className="containery grid2">
          {coursesCard.map((val) => {
            return (
              <div className="items">
                <div className="two">
                  <div className="content flex">
                    <div className="left">
                      <div className="imgy">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="texty">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <>
                            <div className="boxy">
                              <div className="dimg">
                                <img src={details.dcover} alt="" />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll}/{val.pricePer}
                    </h3>
                  </div>
                </div>
                <div className="enroll">
                  <button className="outline-btn">ENROLL NOW !</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Programcard;
