import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from '../SideDrawerToggler/SideDrawerToggler';

const Toolbar = (props) => {
    let desktopClasses = [classes.DesktopOnly];
    if (props.scrolled) {
        desktopClasses.push(classes.Scrolled);
    }

    return (
        <div>
            <header className={classes.Toolbar}>
                {/* Side Drawer */}
                <SideDrawerToggler open={props.togglerClicked}/>
                
                {/* Logo */}
                <div className={classes.Logo}>
                    <Logo />
                </div>

                {/* Navigation bar */}
                <nav className={desktopClasses.join(' ')}>
                    <NavigationItems isAuthenticated={props.isAuthenticated} />
                </nav>
            </header>
            
        </div>
        
    );
}

export default Toolbar;