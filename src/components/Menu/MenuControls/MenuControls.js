import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './MenuControls.module.css';

class MenuControls extends Component {

    render() {

        const controls = this.props.categories.map(cat => {
            let btnType = this.props.btnStyles.btnType
            if(cat.uuid === this.props.activeCategory) {
                btnType = this.props.btnStyles.activeBtnType
            }
            return (
                <Button key={cat.uuid}
                        btnType={btnType}
                        clicked={() => this.props.categorySelected(cat.uuid)}
                >
                    {cat.name}
                </Button>
            )
        })
        
        return (
            <React.Fragment>
                <div className={classes.Controls}>
                    {controls}
                </div>
            </React.Fragment>
        );
    }    
}

export default MenuControls;