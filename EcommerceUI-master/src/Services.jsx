 import React, { useState } from "react";
import servicesApi from "./APIs/Services";
import "./CSS/Services.css";

const Services = () => {
  const [serviceData, setServiceData] = useState(servicesApi);

  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send Money ?
          </h1>
          <div className="row">
            {serviceData.map((element) => {
              const { id, logo, title, info } = element;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
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

export default Services;
