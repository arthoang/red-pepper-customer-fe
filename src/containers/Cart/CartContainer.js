import React, { Component } from 'react';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';

import BSModal from '../../components/UI/BSModal/BSModal';
import CartListing from '../../components/Order/Cart/CartListing/CartListing';


//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class CartContainer extends Component {
    handleAddOne = (itemId) => {
        console.log("Add one " + itemId );
    }
    
    handleRemoveOne = (itemId) => {
        console.log("Remove one " + itemId); 
    }

    handleRemoveAll = (itemId) => {
        console.log("Remove all " + itemId);
    }

    render() {
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox  link="cart"
                            title="SHOPPING CART"
                            caption="ORDER CHECKOUT"
                >
                </HeaderBox>
                <CartListing 
                    items={this.props.currentOrderItems}
                    removeOne={this.handleRemoveOne}
                    addOne={this.handleAddOne}
                    removeAll={this.handleRemoveAll}
                />

                
            </React.Fragment>
        );
        
    }
}

const mapStateToProps = state => {
    return {
        currentOrderItems: state.order.currentOrderItems,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: (item) => dispatch(actions.addToOrder(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);