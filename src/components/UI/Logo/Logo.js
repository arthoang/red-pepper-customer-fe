import React from 'react';
import logo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Red Pepper Restaurant"/>
        </div>
    );
};

export default Logo;