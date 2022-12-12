import React from 'react';
import Navbar from '../../SharedPage/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Footer from '../../SharedPage/Footer/Footer';

const Appointment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader/>
            <Footer/>
        </div>
    );
};

export default Appointment;