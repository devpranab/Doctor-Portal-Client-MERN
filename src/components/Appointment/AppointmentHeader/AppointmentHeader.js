import React from "react";
import Chire from "../../../images/Chire.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = () => {

    const handleDateChange = date => {
        console.log('Changing Date', date);
    }

  return (
    <div>
      <main
        style={{ height: "600px", width: "100%" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{color: "#3A4256"}}>Appointment</h1>
          <br />
          <br />
          <Calendar onChange={handleDateChange} value={new Date()}/>
        </div>
        <div className="col-md-6">
          <img src={Chire} alt="" className="img-fluid"/>
        </div>
      </main>
    </div>
  );
};

export default AppointmentHeader;
