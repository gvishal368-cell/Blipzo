import React, { useState } from "react";
import workData from "./APIs/Works";
import "./CSS/Works.css";

const Works = () => {
  const [data, setData] = useState(workData);

  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How It Works</h1>
          <div className="row">
            {data.map((element) => {
              const { id, logo, title, info } = element;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    key={id} 
                  >
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
