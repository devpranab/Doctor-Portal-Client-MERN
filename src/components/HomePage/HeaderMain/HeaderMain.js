import React from "react";
import './HeaderMain.css';
import { Link } from "react-router-dom";
import Chire from "../../../images/Chire.png";

const HeaderMain = () => {
  return (
    <main
      className="row d-flex align-items-center"
    >
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sed a
          magnam autem culpa explicabo.
        </p>
        <Link to="/appointment">
          <button className="btn btn-primary">GET APPOINTMENT</button>
        </Link>
      </div>
      <div className="col-md-6">
        <img src={Chire} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
