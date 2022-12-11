import React from "react";
import fluoride from "../../../images/Fluoride.png";
import cavity from "../../../images/Cavity.png";
import whitening from "../../../images/Teeth Whitening.png";
import ServiceDetail from "./ServicesDetail/ServicesDetail";

const serviceData = [
  {
    name: " Fluoride Treatment ",
    img: fluoride,
  },
  {
    name: " Cavity Filling ",
    img: cavity,
  },
  {
    name: " Teeth Whitening ",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5 mb-5 pt-sm-5 mt-sm-5 mt-md-0 pt-md-0">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}> OUR SERVICES </h5>
        <h2> Services We Provide </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
