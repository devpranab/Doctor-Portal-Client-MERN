import React, {useState} from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
    setSelectedDate(date);
    console.log(selectedDate);
    }
    return (
        <section className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-5">
                        <h2>Appointment</h2>
                        <Calendar
                        onChange={handleDateChange}
                        value={new Date()}/>
                    </div>
                    <div className="col-md-5">
                        <AppointmentByDate selectedDate={selectedDate}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;