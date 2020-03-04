import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from '../MenuItem/MenuItem';
import classes from './MenuListing.module.css';

class MenuListing extends Component {
    // menu: {    
    //     mainCatUid : {
    //         hasSubcat: true
    //         items: {
    //              subCatUid: [{}]
    //          }
    //         
    //     }
    // }
    // OR
    // menu: {    
    //     mainCatUid : {
    //         hasSubcat: false
    //         items: [{}]
    //     }
    // }

    constructRowsArr = (inputArr) => {
        const displayCols = 2;
        let count = 1;
        let cols = [];
        let rows = [];
        inputArr.forEach(item => {
            if (count%2===0) {
                // add to cols
                cols.push(item);
                // add to rows
                rows.push(cols);
                // reset cols array
                cols = [];
            } else {
                cols.push(item);
            }
            // for last elements
            if (count === inputArr.length && cols.length > 0) {
                // fill cols to the limit
                for (let i = cols.length; i< displayCols; i++) {
                    cols.push({});
                }
                rows.push(cols);
                cols = [];
            }
            count++;
        });
        return rows;
    }

    renderRows = (rows) => {
        let rowsUi = rows.map((row, ridx) => {
            return (
                <Row key={ridx}>
                    {
                        row.map((col, cidx) => {
                            if (Object.keys(col).length !== 0) {
                                // valid column
                                return (
                                    <Col lg={true} key={col.uuid}>
                                        <MenuItem 
                                            imageSrc={col.image}
                                            title={col.name}
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
        });
        return rowsUi;
    }

    render() {
        
        //split array into pair of row each
        let rows = [];
        let cols = [];
        let menu = [];
        // for those that has sub category
        if (this.props.menu.hasSubcat) {
            // only process if this category has items
            // this.props.menu.items is object, with key = subCatId, value = array of dishes
            if (Object.keys(this.props.menu.items).length > 0) {
                // each sub item is a pair of key: value, with key = subCatId, value = 
                for (let subKey in this.props.menu.items) {
                    const subCategory = this.props.subCategories.filter(cat => {return cat.uuid === subKey})[0];
                    let subItemsArr = this.props.menu.items[subKey];
                    let section = {...subCategory};
                    rows = this.constructRowsArr(subItemsArr);
                    section['rows'] = rows
                    menu.push(section);
                    
                }
            } else {
                console.log("Category has no item!");
            }
        } else {
            // for those that does not have sub cat
            rows = this.constructRowsArr(this.props.menu.items);
            menu.push(rows);
        }

        //render
        let listing = <div></div>;
        if (this.props.menu.hasSubcat) {
            listing = menu.map(section => {
                //each section consist 1 row of section name, then render each item as a row of 2 cols
                return (
                    <React.Fragment key={section.uuid}>
                        <Row>
                            <Col lg={true}>
                                <div className={classes.SectionHeading}>{section.name}</div>
                            </Col>
                            <Col></Col>
                        </Row>
                        {this.renderRows(section.rows)}
                    </React.Fragment>
                )
            })
        } else {
            listing = this.renderRows(menu[0]);
        }
        
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