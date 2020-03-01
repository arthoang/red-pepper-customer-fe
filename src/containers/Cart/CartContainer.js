import React, { Component } from 'react';
import classes from './CartContainer.module.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import Button from '../../components/UI/Button/Button';
import BSModal from '../../components/UI/BSModal/BSModal';
import CartListing from '../../components/Order/Cart/CartListing/CartListing';
import CartTotal from '../../components/Order/Cart/CartTotal/CartTotal';
import CustomerInfo from '../../components/Order/Checkout/CustomerInfo/CustomerInfo';
import { uuid } from 'uuidv4';


//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class CartContainer extends Component {
    state = {
        showModal: false,
        orderSubmitted: false,
    }

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
        
        this.handleShowModal();
    }

    handleCheckout = (values) => {
        console.log("Checkout!");
        console.log(values);
        //save customer
        let customer = {};
        for(let key in values) {
            customer[key] = values[key];
        }
        this.props.saveCustomerInfo(customer);

        //generate order id
        this.props.generateOrderNumber();

        //generate data
        let data = {
            uuid: uuid(),
            customer: this.props.customer,
            orderId: this.props.newOrderId,
            paymentStatus: this.props.paymentStatus,
            paymentMethod: this.props.paymentMethod,
            items: this.props.currentOrderItems,
            gst: this.props.currentOrderGST,
            pst: this.props.currentOrderPST,
            subTotal: this.props.currentOrderSubTotal,
            total: this.props.currentOrderTotal,
        };

        console.log("Data to send:");
        console.log(data);
        
        //send data to firebase
        this.props.submitOrder(data);

        //close Modal
        this.handleCloseModal();
    }

    handleShowModal = () => {
        this.setState({
            showModal: true,
        })
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false,
        })
    }

    // componentDidMount() {
    //     console.log("Begin to fetch");
    //     this.props.fetchAllOrders();
    // }

    render() {
        if (this.props.orders) {
            console.log("Orders retrieved.");
            console.log(this.props.orders);
        }
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

                    {/* Customer Info Modal */}
                    <BSModal
                        show={this.state.showModal} 
                        onHide={this.handleCloseModal}                    
                        classNames="Modal"
                        centered
                        title="CONTACT INFORMATION"
                    >
                        <CustomerInfo 
                            btnType="ButtonFormSmall"
                            btnAction={this.handleCheckout}
                            btnLabel="Add to order"
                        />
                    </BSModal>
                    
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
        paymentStatus: state.order.paymentStatus,
        paymentMethod: state.order.paymentMethod,
        customer: state.order.customer,
        newOrderId: state.order.newOrderId,
        orders: state.order.orders,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: (item) => dispatch(actions.processAddToOrder(item)),
        removeItemFromOrder: (item) => dispatch(actions.processRemoveFromOrder(item)),
        generateOrderNumber: () => dispatch(actions.generateOrderId()),
        saveCustomerInfo: (customer) => dispatch(actions.processSaveCustomerInfo(customer)),
        fetchAllOrders: () => dispatch(actions.processFetchAllOrder()),
        submitOrder: (order) => dispatch(actions.submitOrder(order)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);