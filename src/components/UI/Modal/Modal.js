import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate( nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        let bgColor = 'rgba(255,255,255,1)';
        if (this.props.transparent) {
            bgColor = 'rgba(255,255,255,0)';
        }
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} off={this.props.offBackdrop}/>
                <div 
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        backgroundColor: bgColor
                    }}
                    className={classes.Modal}>
                    {this.props.children}
                </div>
            </React.Fragment>
            
        );
    };
}   

export default Modal;