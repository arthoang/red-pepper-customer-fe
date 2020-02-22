import React from 'react';
import classes from './Footer.module.css';
import FooterItem from './FooterItem/FooterItem';

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <FooterItem>© 2020 – All Rights Reserved to Red Pepper | Powered by <strong>Blueapp Studio</strong></FooterItem>
        </div>
    )
}

export default Footer;