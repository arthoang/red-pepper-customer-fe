import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementLabel: 'Email/Username:',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email or your username'
                },
                value: '',
                validation: {
                    required: true,
                    // isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementLabel: 'Password:',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                value: '',
                validation: {
                    required: true,
                    // minLength: 7
                },
                valid: false,
                touched: false
            }, 
        },
    };

    componentDidMount() {
        // if (!this.props.building && this.props.authRedirectPath!=='/') {
        //     //reset redirect path to root
        //     this.props.onAuthSetRedirectPath();
        // }
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(el => (
            <Input key={el.id}
                    elementLabel={el.config.elementLabel}
                    elementType={el.config.elementType} 
                    elementConfig={el.config.elementConfig}
                    value={el.config.value}
                    invalid={!el.config.valid}
                    shouldValidate = {el.config.validation}
                    touched = {el.config.touched}
                    changed={(event) => this.inputChangedHandler(event, el.id)} 
            />
        ));
        
        let authUI = <Spinner />
        if (!this.props.loading) {
            authUI = <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Please login with your username or email address: </h1>
                    {form}
                    <Button btnType="ButtonBlue">Submit</Button>                    
                </form>
            </div>
        }

        let errorMsg = null;        
        if (this.props.error) {
            errorMsg = <p className={classes.error}>{this.props.error.data.detail}</p>;
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        };

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMsg}
                {authUI}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onAuthSetRedirectPath: () => dispatch(actions.authSetRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);