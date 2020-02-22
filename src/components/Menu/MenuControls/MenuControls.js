import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './MenuControls.module.css';

class MenuControls extends Component {

    render() {
        const controls = Object.keys(this.props.categories).map(ckey => {
            return (
                <Button key={ckey}
                    btnType={this.props.activeCategory===ckey ? 
                        this.props.categories[ckey].activeBtnType 
                        : this.props.categories[ckey].btnType}
                    clicked={() => this.props.categorySelected(ckey)}
                    >
                    {this.props.categories[ckey].label}
                </Button>
            );
        });
        
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