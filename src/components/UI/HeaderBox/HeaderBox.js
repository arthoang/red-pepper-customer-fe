import React from 'react';
import MenuImg from '../../../assets/images/menu.jpg';
import ContactImg from '../../../assets/images/contact.png';
import GalleryImg from '../../../assets/images/gallery.jpg';
import CartImg from '../../../assets/images/cart.jpg';
import classes from './HeaderBox.module.css';

const HeaderBox  = (props) => {
    let bgImg="";
    if (props.link==="menu") {
        bgImg=MenuImg;
    } else if (props.link==="contact") {
        bgImg=ContactImg;
    } else if (props.link==="cart") {
        bgImg=CartImg;
    }
      else if (props.link==="gallery") {
        bgImg=GalleryImg;
    }

    const style = {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('+bgImg+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <React.Fragment>
            <div className={classes.HeaderBox} style={style}>
                <div className={classes.FlexContainer}>
                    <div className={classes.Title} >{props.title}</div>
                    <div className={classes.Caption}>
                        <div className={classes.Line}/>
                        <div className={classes.CaptionText}>{props.caption}</div>
                        <div className={classes.Line}/>
                    </div>
                </div>
                
            </div>
            
        </React.Fragment>
    )
}

export default HeaderBox;