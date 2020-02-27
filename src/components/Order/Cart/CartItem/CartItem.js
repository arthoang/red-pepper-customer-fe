import React from 'react';
import classes from './CartItem.module.css';
import Media from 'react-bootstrap/Media';
import ItemControls from './ItemControls/ItemControls';
import ItemInfo from './ItemInfo/ItemInfo';

const CartItem = (props) => {
    
    return (
        <div className={classes.CartItem}>
            <Media >
                <img className={classes.Image} src={props.item.image}/>
                <Media.Body>
                    <div className={classes.Title}>{props.item.dish}</div>
                    <ItemInfo
                        info={props.item.notes}
                        removeAll={props.removeAll}
                    />
                    <ItemControls
                        price={props.item.price}
                        quantity={props.item.quantity}
                        removeOne={props.removeOne}
                        addOne={props.addOne}
                    />
                </Media.Body>
            </Media>
        </div>
        
    );
    
}

export default CartItem;