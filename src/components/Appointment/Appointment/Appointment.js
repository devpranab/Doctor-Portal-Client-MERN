import React, { useState } from 'react';
import Navbar from '../../SharedPage/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Footer from '../../SharedPage/Footer/Footer';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        console.log( date);
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}/>
            <Footer/>
        </div>
    );
};

export default Appointment;