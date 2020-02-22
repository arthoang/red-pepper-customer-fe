import React from 'react';
import Select from 'react-select';
import classes from './Input.module.css';

const Input = (props) => {

    let inputEl = null;
    let validationError = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>Please enter a valid value!</p>
    }

    switch (props.elementType) {
        case ('input'): 
            inputEl = (<div>
                    <label className={classes.Label}>{props.elementLabel}</label>
                    <input 
                                    className={inputClasses.join(' ')} 
                                    {...props.elementConfig} 
                                    value={props.value} 
                    onChange={props.changed}/>
                </div>); 
            break;
        case ('textArea'): 
            inputEl = (
                        <div>
                            <label className={classes.Label}>{props.elementLabel}</label>
                            <textarea 
                                className={inputClasses.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}/>
                        </div>); 
            break;
        case ('select'): 
                        
            inputEl = (
                        <div>
                            <label className={classes.Label}>{props.elementLabel}</label>
                            <Select 
                                className='basic-multi-select'
                                classNamePrefix='select'
                                isClearable={props.elementConfig.isClearable}
                                onChange={props.changed}
                                options={props.elementConfig.options}
                                isMulti={props.elementConfig.isMulti}
                                >
                            </Select>
                        </div>); 
            break;
        default: 
            inputEl = (<div>
                            <label className={classes.Label}>{props.elementLabel}</label>
                            <input 
                                className={inputClasses.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}/>
                        </div>);
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputEl}
            {validationError}
        </div>
    );
}
    

export default Input;