import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    let classNames = [classes.Button, classes[props.btnType]];
    return (
        <button onClick={props.clicked} 
                disabled={props.disabled}
                className={classNames.join(' ')}>
            {props.children}
        </button>
    );
    }

export default Button;