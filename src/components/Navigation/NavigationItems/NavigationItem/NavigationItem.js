import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
import Badge from '../../../UI/Badge/Badge';

const NavigationItem = (props) => {
    let navItem = (
        <div className={classes.ItemContainer}>
            <li>
                <NavLink className={classes.NavLink} to={props.link} activeClassName={classes.NavLinkActive}>
                    {props.children}
                </NavLink>
            </li>
        </div>
    );
    
    if (props.badgeEnabled) {
        navItem = (
            <div className={classes.ItemContainer}>
                <li>
                    <NavLink className={classes.NavLink} to={props.link} activeClassName={classes.NavLinkActive}>
                        {props.children}
                    </NavLink>
                    <Badge amount={props.badgeAmount}/>
                </li>

            </div>
                
        );
    }

    return navItem;
}


export default NavigationItem;