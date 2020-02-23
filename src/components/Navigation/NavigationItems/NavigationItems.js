import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
//redux
import { connect } from 'react-redux';

class NavigationItems extends Component {
    render() {
        let authenticationRelatedLinks = (
            <NavigationItem link="/login">LOGIN/REGISTER</NavigationItem>
        );

        if (this.props.isAuthenticated) {
            authenticationRelatedLinks = (
                <React.Fragment>
                    <NavigationItem link="/profile">PROFILE</NavigationItem>
                    <NavigationItem link="/logout">LOGOUT</NavigationItem>                
                </React.Fragment>            
            )
        }
    
        let cart = (
            <NavigationItem link="/cart" type="cart">
                {/* <img className={classes.Image} src={CartImage} alt="cart"/> */}
                {/* <div className={classes.Cart}></div> */}
            </NavigationItem>
        );
        
        if (this.props.currentOrderItems.length > 0) {
            cart = <NavigationItem 
                link="/cart"
                badgeEnabled='true'
                badgeAmount={this.props.currentOrderItems.length}
                type="cart"
            >
                    {/* <div className={classes.Cart}></div> */}
            </NavigationItem>
        }
    
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/menu" >MENU</NavigationItem>
                <NavigationItem link="/contact" >CONTACT</NavigationItem>
                <NavigationItem link="/order" >ORDER</NavigationItem>
                {cart}
                {/* {props.isAuthenticated ? 
                    <NavigationItem link="/logout">Logout</NavigationItem> :
                    <NavigationItem link="/login">Login</NavigationItem>
                } */}
    
                {authenticationRelatedLinks}
                
            </ul>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentOrderItems: state.order.currentOrderItems,
    };
}

export default connect(mapStateToProps)(NavigationItems);
