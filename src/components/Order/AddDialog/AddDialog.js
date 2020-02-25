import React, { Component } from 'react';
import classes from './AddDialog.module.css';
import Form from '../../Form/Form';
import * as yup from 'yup';

class AddDialog extends Component {
    state = {
        formElements: {
            portions: {
                elementLabel: 'How many portions:',
                elementType: 'input',
                inputType: 'number',
                placeholder: 'please input the portions in number',
                
            },
            notes: {
                elementLabel: 'Special notes:',
                elementType: 'input',
                inputType: 'textarea',
                placeholder: 'Let us know if you have any special request for the dish',
            }, 
        },
        initialValues: {
            portions: 1
        },
        validationSchema: yup.object({
            portions: yup.number().min(1)
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