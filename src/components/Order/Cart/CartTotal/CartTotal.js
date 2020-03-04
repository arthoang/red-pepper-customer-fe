import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import classes from './CartTotal.module.css';

class CartTotal extends Component {
    render() {
        return (
            <Container className={classes.CartTotal}>
                <div className={classes.CartTotalRow}>
                    <div className={classes.CartTotalLabel}>
                        SUB TOTAL:
                    </div>
                    <div className={classes.CartTotalNumber}>
                        ${this.props.subTotal}
                    </div>
                </div>
                <div className={classes.CartTotalRow}>
                    <div className={classes.CartTotalLabel}>
                        GST(5%):
                    </div>
                    <div className={classes.CartTotalNumber}>
                        ${this.props.gst}
                    </div>
                </div>
                <div className={classes.CartTotalRow}>
                    <div className={classes.CartTotalLabel}>
                        PST(6%):
                    </div>
                    <div className={classes.CartTotalNumber}>
                        ${this.props.pst}
                    </div>
                </div>
                <div className={classes.CartTotalRow}>
                    <div className={classes.CartTotalLabel}>
                        ORDER TOTAL:
                    </div>
                    <div className={classes.CartTotalNumber}>
                        ${this.props.total}
                    </div>
                </div>                
            </Container>
        )
    }
}

export default CartTotal;


