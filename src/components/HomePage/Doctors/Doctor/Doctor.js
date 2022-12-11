import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "300px" }} src={doctor.img} alt="" />
      <h5 className="mt-3 mb-3">{doctor.name}</h5>

      <p>
        +{doctor.phn}{" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{" "}
      </p>
    </div>
  );
};

export default Doctor;
