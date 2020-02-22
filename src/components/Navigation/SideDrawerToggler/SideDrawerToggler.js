import React from 'react';
import classes from './SideDrawerToggler.module.css';

const SideDrawerToggler = (props) => {
    return (
        <div onClick={props.open}
            className = {classes.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
        </div>
    );
};

export default SideDrawerToggler;