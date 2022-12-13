import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faFileAlt,
  faGripHorizontal,
  faHome,
  faSignOutAlt,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar py-5 px-4">
      <ul className="list-unstyled pl-xl-3">
        <li>
          <Link className="text-white" to="/">
            <FontAwesomeIcon icon={faHome} /><span>Home</span>
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/appointment/dashboard">
            <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/dashboard-appointment">
            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/patients">
            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/prescription">
            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/addDoctor">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/doctor/setting">
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div >
        <Link className="text-white logout pl-xl-3" to="/dashboard">
        <FontAwesomeIcon icon={faSignOutAlt} /> <span> Log Out </span>
        </Link>
        </div>
    </div>
  );
};

export default Sidebar;
