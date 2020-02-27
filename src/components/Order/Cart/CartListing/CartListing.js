import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import classes from './CartListing.module.css';
import { NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

class CartListing extends Component {
    render() {
//         dishId: 6
// dish: "Chicken Soup"
// image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg"
// price: 8
// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
// portions: 2
        let ui = (
            <div className={classes.NoItem}>
                There is no item in the cart. Please proceed to our &nbsp;
                <NavLink className={classes.NavLink} to="/menu" activeClassName={classes.NavLinkActive}>
                    MENU
                </NavLink>                
                &nbsp; to begin ordering.
            </div>
        );
        let listing = "";
        if (this.props.items && this.props.items.length > 0) {
            // list items
            const arrLen = this.props.items.length;
            listing = this.props.items.map((item, idx) => {
                if (idx < arrLen - 1) {
                    return (
                        <React.Fragment key={""+item.dishId+""+idx} >
                            <CartItem 
                                removeOne={this.props.removeOne}
                                addOne={this.props.addOne}
                                removeAll={this.props.removeAll}
                                item={item}
                            />
                            <hr className={classes.Hr} />
                        </React.Fragment>
                        
                    );
                } else {
                    return (
                        <React.Fragment key={""+item.dishId+""+idx}>
                            <CartItem 
                                key={item.dishId} 
                                removeOne={this.props.removeOne}
                                addOne={this.props.addOne}
                                removeAll={this.props.removeAll}
                                item={item}
                            />
                        </React.Fragment>
                        
                    );
                }
                
            });
            ui = (
                <Container className={classes.CartListing}>
                    {listing}
                </Container>
            );
        }

        return ui;
    }
}

export default CartListing;