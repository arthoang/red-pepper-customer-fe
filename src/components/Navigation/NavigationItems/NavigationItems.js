import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import * as ROUTES from '../../../constants/routes';
//redux
import { connect } from 'react-redux';


class NavigationItems extends Component {
    render() {
        let authenticationRelatedLinks = (
            <NavigationItem link={ROUTES.SIGN_IN}>LOGIN/REGISTER</NavigationItem>
        );

        if (this.props.isAuthenticated) {
            authenticationRelatedLinks = (
                <React.Fragment>
                    <NavigationItem link={ROUTES.PROFILE}>PROFILE</NavigationItem>
                    <NavigationItem link={ROUTES.SIGN_OUT}>LOGOUT</NavigationItem>                
                </React.Fragment>            
            )
        }
    
        let cart = (
            <NavigationItem link={ROUTES.CART} type="cart">
                {/* <img className={classes.Image} src={CartImage} alt="cart"/> */}
                {/* <div className={classes.Cart}></div> */}
            </NavigationItem>
        );
        
        if (this.props.currentOrderItems.length > 0) {
            cart = <NavigationItem 
                link={ROUTES.CART}
                badgeEnabled='true'
                badgeAmount={this.props.currentOrderItems.length}
                type="cart"
            >
                    {/* <div className={classes.Cart}></div> */}
            </NavigationItem>
        }
    
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link={ROUTES.MENU} >MENU</NavigationItem>
                <NavigationItem link={ROUTES.CONTACT} >CONTACT</NavigationItem>
                <NavigationItem link={ROUTES.ORDER} >ORDER</NavigationItem>
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
