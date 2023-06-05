import React from "react";
import Title from "../common/title/Title";
import { online } from "../../dummydata";
const Onlineprogram = () => {
  return (
    <>
      <section className="online">
        <div className="contain">
          <Title Subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="boxyy">
                <div className="two2">
                  <div className="imgyy">
                    <img src={val.hoverCover} alt="" />
                  </div>
                  <h1>{val.courseName}</h1>
                </div>
                <div className="cor">{val.course}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Onlineprogram;
