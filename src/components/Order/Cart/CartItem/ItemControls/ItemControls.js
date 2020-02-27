import React from 'react';
import classes from './ItemControls.module.css';
import Button from '../../../../UI/Button/Button';

const ItemControls = (props) => {
    return (
        <div className={classes.ItemControls}>
            <div className={classes.Text}>Quantity</div>

            <div className={classes.NumberPicker}>
                <span><Button btnType="ButtonQuantity" clicked={props.removeOne}>-</Button></span>
                
                <span className={classes.Number}>{props.quantity}</span>
                <span><Button btnType="ButtonQuantity" clicked={props.addOne}>+</Button></span>
            </div>
            
            
            <div className={classes.Number}>${+props.price * props.quantity}</div>
        </div>
    )
}

export default ItemControls;