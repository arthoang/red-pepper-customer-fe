import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll.bind(this));
    }

    listenToScroll() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            this.toggleScroll(true);
        } else {
            this.toggleScroll(false);
        }
    }

    toggleScroll = (value) => {
        if (this.state.scrolled !== value) {
            //only update if different, otherwise do not update state
            this.setState({scrolled: value});
        }
    }


    toggleSideDrawerHandler = () => {
        this.setState((prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar scrolled={this.state.scrolled} togglerClicked={this.toggleSideDrawerHandler} isAuthenticated={this.props.isAuthenticated}/>
                <SideDrawer show={this.state.showSideDrawer} close={this.toggleSideDrawerHandler} isAuthenticated={this.props.isAuthenticated}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <div className={classes.Push} />
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
    
export default connect(mapStateToProps)(Layout);