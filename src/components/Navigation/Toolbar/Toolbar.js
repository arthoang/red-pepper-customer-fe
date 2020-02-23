import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from '../SideDrawerToggler/SideDrawerToggler';

const Toolbar = (props) => {
    let desktopClasses = [classes.DesktopOnly];
    let toolbarClasses = [classes.Toolbar];
    if (props.scrolled) {
        //desktopClasses.push(classes.Scrolled);
        toolbarClasses.push(classes.Scrolled);
    }

    return (
        <div>
            <header className={toolbarClasses.join(' ')}>
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