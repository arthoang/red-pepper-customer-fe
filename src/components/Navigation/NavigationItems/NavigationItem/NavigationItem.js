import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
import Badge from '../../../UI/Badge/Badge';

const NavigationItem = (props) => {

    let classNames = [classes.NavLink];
    let activeClassNames = [classes.NavLinkActive];
    if (props.type==="cart") {
        classNames.push(classes.Cart);
        activeClassNames.push(classes.CartActive);
    }

    let navItem = (
        <div className={classes.ItemContainer}>
            <li>
                <NavLink className={classNames.join(' ')} to={props.link} activeClassName={activeClassNames.join(' ')}>
                    {props.children}
                </NavLink>
            </li>
        </div>
    );
    
    if (props.badgeEnabled) {
        navItem = (
            <div className={classes.ItemContainer}>
                <li>
                    <NavLink className={classNames.join(' ')} to={props.link} activeClassName={activeClassNames.join(' ')}>
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