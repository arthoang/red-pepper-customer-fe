import React, { Component } from 'react';
import classes from './CartContainer.module.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import Button from '../../components/UI/Button/Button';
import BSModal from '../../components/UI/BSModal/BSModal';
import CartListing from '../../components/Order/Cart/CartListing/CartListing';
import CartTotal from '../../components/Order/Cart/CartTotal/CartTotal';


//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class CartContainer extends Component {
    handleAddOne = (item) => {
        let newItem = {...item};
        newItem.quantity = 1;
        this.props.addItemToOrder(newItem);
    }
    
    handleRemoveOne = (item) => {
        let newItem = {...item};
        newItem.quantity = -1;
        this.props.addItemToOrder(newItem);
    }

    handleRemoveAll = (item) => {
        this.props.removeItemFromOrder(item);
    }

    handlePlaceOrder = () => {
        console.log("Handle place order!");
    }

    render() {
        let ui = (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox  link="cart"
                    title="SHOPPING CART"
                    caption="ORDER CHECKOUT"
                >
                </HeaderBox>
                <div className={classes.NoItem}>
                    There is no item in the cart. Please proceed to our &nbsp;
                    <NavLink className={classes.NavLink} to="/menu" activeClassName={classes.NavLinkActive}>
                        MENU
                    </NavLink>                
                    &nbsp; to begin ordering.
                </div>
            </React.Fragment>
        );
        if (this.props.currentOrderItems && this.props.currentOrderItems.length > 0) {
            ui = (
                <React.Fragment>
                    {/* Header box */}
                    <HeaderBox  link="cart"
                                title="SHOPPING CART"
                                caption="ORDER CHECKOUT"
                    >
                    </HeaderBox>
                    {/* Item Listing */}
                    <CartListing
                        items={this.props.currentOrderItems}
                        removeOne={this.handleRemoveOne}
                        addOne={this.handleAddOne}
                        removeAll={this.handleRemoveAll}
                    />
                    {/* Total */}
                    <CartTotal
                        pst={this.props.currentOrderPST}
                        gst={this.props.currentOrderGST}
                        subTotal={this.props.currentOrderSubTotal}
                        total={this.props.currentOrderTotal}
                    />

                    {/* Place Order */}
                    <Container className={classes.PlaceOrderButton}>
                        <Button btnType="ButtonLong" clicked={this.handlePlaceOrder}>
                            PLACE ORDER
                        </Button>
                    </Container>

                    
                </React.Fragment>
            );
        }

        return ui;
        
    }
}

const mapStateToProps = state => {
    return {
        currentOrderItems: state.order.currentOrderItems,
        currentOrderGST: state.order.currentOrderGST,
        currentOrderPST: state.order.currentOrderPST,
        currentOrderSubTotal: state.order.currentOrderTotalBeforeTaxes,
        currentOrderTotal: state.order.currentOrderTotalAfterTaxes,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: (item) => dispatch(actions.processAddToOrder(item)),
        removeItemFromOrder: (item) => dispatch(actions.processRemoveFromOrder(item)),
        // calculateAmounts: () => dispatch(actions.calculateAmounts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);