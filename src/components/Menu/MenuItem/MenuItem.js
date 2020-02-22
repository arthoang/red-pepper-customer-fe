import React from 'react';
import classes from './MenuItem.module.css';
import Button from '../../UI/Button/Button';

const MenuItem = (props) => {
    
    return (
        <React.Fragment>
            <div className={classes.MenuItem}>
                <img className={classes.Image} src={props.imageSrc} alt={props.title}></img>
                <div className={classes.DescriptionContainer}>
                    <div className={classes.TitleRowContainer}>
                        <div className={classes.Title}>{props.title}</div>
                        <div className={classes.Spacer} />
                        <div className={classes.Price}>${props.price}</div>
                    </div>
                    <div className={classes.Description}>{props.description}</div>
                    <div className={classes.OrderControls}>
                        <Button btnType="ButtonFormSmall" clicked={props.add}>Add to order</Button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
    
}

export default MenuItem;