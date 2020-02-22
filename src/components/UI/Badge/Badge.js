import React from 'react';
import classes from './Badge.module.css';

const Badge = (props) => {
    return (
        <div className={classes.Badge}>{props.amount}</div>
    );
}

export default Badge;