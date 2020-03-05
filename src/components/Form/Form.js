import React from 'react';
import Button from '../UI/Button/Button';
import { useFormik } from 'formik';
import BSForm from 'react-bootstrap/Form';



const Form = (props) => {
    const formElementsArray = [];
    for (let key in props.formElements) {
        formElementsArray.push({
            id: key,
            config: props.formElements[key]
        })
    }

    const formik = useFormik({
        validationSchema: props.validationSchema,
        initialValues: props.initialValues,
        onSubmit: (values) => {
            props.submitted(values);
        }
    })

    let form = (
        <BSForm noValidate validated={formik.validated} onSubmit={formik.handleSubmit}>
            {formElementsArray.map(el => {
                let formControl = "";
                let formControlFeedback = "";
                if (el.config.elementType==='input') {
                    if (el.config.inputType ==='textarea') {
                        formControl = (
                            <BSForm.Control 
                                type={el.config.elementType}
                                as={el.config.inputType}
                                name={el.id}
                                value={formik.values[el.id]}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched[el.id] && formik.errors[el.id]}
                                placeholder={el.config.placeholder}
                            />
                        );
                    } else {
                        formControl = (
                            <BSForm.Control 
                                type={el.config.inputType}
                                name={el.id}
                                value={formik.values[el.id]}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched[el.id] && formik.errors[el.id]}
                                placeholder={el.config.placeholder}
                            />
                        );
                    }
                    formControlFeedback = (
                        <BSForm.Control.Feedback type="invalid">
                            {formik.errors[el.id]}
                        </BSForm.Control.Feedback>
                    );
                } else if (el.config.elementType==='check') {
                    
                    formControl = (
                        <BSForm.Check
                            feedback={formik.errors[el.id]}
                        >
                        </BSForm.Check>
                    )
                } else if (el.config.elementType==='select') {
                    
                    formControl = (
                        <BSForm.Control 
                            as={el.config.elementType}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched[el.id] && formik.errors[el.id]}
                        >
                            {el.config.options.map(option => {
                                return (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                )
                            })}
                        </BSForm.Control>
                        
                    )
                }
                return (
                    <BSForm.Group 
                        key={el.id}
                        controlId={el.id}
                        >
                        <BSForm.Label>
                            {el.config.elementLabel}
                        </BSForm.Label>
                        {formControl}
                        {formControlFeedback}
                        
                    </BSForm.Group>
                )
            })}    
            <Button btnType={props.btnType} type='submit'>
                {props.btnLabel}
            </Button>                                            
        </BSForm>    
    )

    return form;
}

export default Form;