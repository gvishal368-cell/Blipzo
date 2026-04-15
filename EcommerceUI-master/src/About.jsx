import React, { useState } from "react";
import "./CSS/About.css";
import aboutApi from "./APIs/About";

const About = () => {
  const [aboutData, setAboutData] = useState(aboutApi);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-image">
              <img
                src="https://raw.githubusercontent.com/thapatechnical/reactfirebaseYoutube/main/public/images/callcenter.jpg"
                alt="Aboutusimg1"
              ></img>
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --Available on Playstore and Appstore
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutData.map((element) => {
                const { id, title, info } = element;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                      </div>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">--Suppport In Many Languages</h3>
              <h1 className="main-heading">Download Now</h1>
              {aboutData.map((element) => {
                const { id, title, info } = element;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                      </div>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
            <div className="col-12 col-lg-5 our-service-rightside-img">
              <img
                src="https://raw.githubusercontent.com/thapatechnical/reactfirebaseYoutube/main/public/images/hero3.jpg"
                alt="Aboutusimg1"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
