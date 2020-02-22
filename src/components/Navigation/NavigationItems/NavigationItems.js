import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import CartImage from '../../../assets/images/shopping_cart_white.png';
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
            <NavigationItem link="/cart" ><img className={classes.Image} src={CartImage} alt="cart"/></NavigationItem>
        );
        
        if (this.props.currentOrderItems.length > 0) {
            cart = <NavigationItem 
                link="/cart"
                badgeEnabled='true'
                badgeAmount={this.props.currentOrderItems.length}
            >
                    <img className={classes.Image} src={CartImage} alt="cart"/>
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
