import React from 'react';
import './Header.css';
import Navbar from '../../SharedPage/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;