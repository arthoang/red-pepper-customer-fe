import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from '../MenuItem/MenuItem';
import classes from './MenuListing.module.css';

class MenuListing extends Component {
    render() {
        const displayCols = 2;
        //split array into pair of row each
        let rows = [];
        let cols = [];
        let count = 1;
        
        this.props.dishes.forEach(dish => {
                if (count%2===0) {
                    // add to cols
                    cols.push(dish);
                    // add to rows
                    rows.push(cols);
                    // reset cols array
                    cols = [];
                } else {
                    cols.push(dish);
                }
                // for last elements
                if (count === this.props.dishes.length && cols.length > 0) {
                    // fill cols to the limit
                    for (let i = cols.length; i< displayCols; i++) {
                        cols.push({});
                    }
                    rows.push(cols);
                    cols = [];
                }
                count++;
            }
        );
        
        // transform!!
        let listing = rows.map((row, ridx) => {
            return (
                <Row key={ridx}>
                    {
                        row.map((col, cidx) => {
                            if (Object.keys(col).length !== 0) {
                                // valid column
                                return (
                                    <Col lg={true} key={col.dishId}>
                                        <MenuItem 
                                            imageSrc={col.image}
                                            title={col.dish}
                                            price={col.price}
                                            description={col.description}
                                            add={() => this.props.add(col)}
                                        />
                                    </Col>
                                );
                            } else {
                                // filled column
                                return (
                                    <Col key={cidx}></Col>
                                )
                            }
                            
                        })
                    }
                </Row>
            );
        })
        
        return (
            <React.Fragment>
                <Container className={classes.MenuListing}>
                    {listing}

                </Container>

            </React.Fragment>
        );
            
        
    }
}

export default MenuListing;