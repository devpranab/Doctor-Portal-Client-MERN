import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/LoginPage/Login";
import Dashboard from "./components/DashboardPage/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider
        value={[loggedInUser, setLoggedInUser]}
      >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/appointment/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
