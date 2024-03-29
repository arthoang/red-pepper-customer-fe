import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import classes from './CartListing.module.css';
import CartItem from '../CartItem/CartItem';

class CartListing extends Component {
    render() {
//         uuid: 6
// dish: "Chicken Soup"
// image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg"
// price: 8
// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
// portions: 2
        let ui = "";
        let listing = "";
        if (this.props.items && this.props.items.length > 0) {
            // list items
            const arrLen = this.props.items.length;
            listing = this.props.items.map((item, idx) => {
                if (idx < arrLen - 1) {
                    return (
                        <React.Fragment key={""+item.uuid+""+idx} >
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
                        <React.Fragment key={""+item.uuid+""+idx}>
                            <CartItem 
                                key={item.uuid} 
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