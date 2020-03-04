import React, { Component } from 'react';
import classes from './AddDialog.module.css';
import Form from '../../Form/Form';
import * as yup from 'yup';

class AddDialog extends Component {
    state = {
        formElements: {
            quantity: {
                elementLabel: 'Quantity:',
                elementType: 'input',
                inputType: 'number',
                placeholder: 'please input the quantity in number',
                
            },
            notes: {
                elementLabel: 'Special notes:',
                elementType: 'input',
                inputType: 'textarea',
                placeholder: 'Let us know if you have any special request for the dish',
            }, 
        },
        initialValues: {
            quantity: 1
        },
        validationSchema: yup.object({
            quantity: yup.number().min(1)
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
            <div className={classes.AddDialog}>
                {form}
            </div>
        );
    }
}

export default AddDialog;