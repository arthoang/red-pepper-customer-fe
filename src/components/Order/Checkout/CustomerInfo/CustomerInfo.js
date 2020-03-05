import React, { Component } from 'react';
import classes from './CustomerInfo.module.css';
import Form from '../../../Form/Form';
import * as yup from 'yup';

class CustomerInfo extends Component {
    state = {
        formElements: {
            firstName: {
                elementLabel: 'First Name:',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'Customer first name',
            },
            lastName: {
                elementLabel: 'Last Name:',
                elementType: 'input',
                inputType: 'test',
                placeholder: 'Customer last name',
            }, 
            email: {
                elementLabel: 'Email:',
                elementType: 'input',
                inputType: 'email',
                placeholder: 'email@provider.ca',
            },
            phone: {
                elementLabel: 'Phone number:',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'XXX XXX XXXX',
            },
            address1: {
                elementLabel: 'Address line 1:',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'Delivery address line 1',
            },
            address2: {
                elementLabel: 'Address line 2:',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'address line 2',
            },
            city: {
                elementLabel: 'City',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'City',
            },
            province: {
                elementLabel: 'Province',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'Province',
            },
            postalCode: {
                elementLabel: 'Postal Code',
                elementType: 'input',
                inputType: 'text',
                placeholder: 'XXX XXX',
            },
            orderType: {
                elementLabel: 'How do you want to receive the order?',
                elementType: 'select',
            }
        },
        initialValues: {
            city: "Saskatoon",
            province: "SK",
        },
        validationSchema: yup.object({
        })
        // validationSchema: yup.object({})
    }
    render() {
        let form = (
            <Form 
                formElements={this.state.formElements}
                initialValues={this.state.initialValues}
                validationSchema={this.state.validationSchema}
                submitted={this.props.btnAction}
                btnType={this.props.btnType}
                btnLabel={this.props.btnLabel}
            >
            </Form>
        )
        return (
            <div className={classes.CustomerInfo}>
                {form}
            </div>
        );
    }
}

export default CustomerInfo;