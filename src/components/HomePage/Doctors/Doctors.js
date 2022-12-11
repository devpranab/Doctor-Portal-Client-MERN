import React from "react";
import DoctorImg from "../../../images/Doctor1.png";
import DoctorImg2 from "../../../images/Doctor2.png";
import DoctorImg3 from "../../../images/Doctor3.png";
import Doctor from "./Doctor/Doctor";

const doctorData = [
  {
    name: "Dr. Washim",
    img: DoctorImg,
    phn: +917657573874,
  },
  {
    name: "Dr. Prasum",
    img: DoctorImg2,
    phn: +918475859473,
  },
  {
    name: "Dr. Avijit",
    img: DoctorImg3,
    phn: +9194738552,
  },
];

const Doctors = () => {
  return (
    <section className="doctor-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>Our Doctors Team</h5>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {doctorData.map((doctor) => (
            <Doctor doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
