import React from 'react';
import classes from './ItemInfo.module.css';
import Button from '../../../../UI/Button/Button';

const ItemInfo = (props) => {
    return (
        <div className={classes.ItemInfo}>
            <div className={classes.Info}>{props.info}</div>
            <Button btnType="ButtonFormSmall" clicked={props.removeAll}>Remove</Button>
        </div>
    )
}

export default ItemInfo;