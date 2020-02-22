import React from 'react';
import classes from './FooterItem.module.css';

const FooterItem = (props) => {
    return (
        <div className={classes.FooterItem}>
            {props.children}
        </div>
    );
}

export default FooterItem;