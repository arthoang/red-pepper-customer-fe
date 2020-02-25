import React from 'react';
import Modal from 'react-bootstrap/Modal';
import classnames from 'classnames';
import classes from './BSModal.module.css';

const BSModal = (props) => {
    let classNames ="";
    if (classNames) {}
        classNames = classnames(props.classNames.split(" ").map(name => {
        return classes[name];
    }));
    
    let isCentered = props.centered ? true : false;
    
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            centered={isCentered}
            dialogClassName={classNames}
        >
            <Modal.Header closeButton>
                <span className={classes.ModalTitle}>{props.title}</span>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>            
        </Modal>
    );
}

export default BSModal;