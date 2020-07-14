import React from 'react';


import logo from '../../assets/images/logo.png';
import './Header.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;