import React, { Component } from 'react';
import classes from './MenuContainer.module.css';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import MenuControls from '../../components/Menu/MenuControls/MenuControls';
import MenuListing from '../../components/Menu/MenuListing/MenuListing';
import Button from '../../components/UI/Button/Button';
import AddDialog from '../../components/Order/AddDialog/AddDialog';
import BSModal from '../../components/UI/BSModal/BSModal';

//Modal
import Modal from 'react-bootstrap/Modal';

//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class MenuContainer extends Component {
    state = {
        showModal: false,
        selectedDish: {},
        category: 'mains',
        categories: {
            appetizers: {
                label: "APPETIZERS",
                btnType: "ButtonMenu",
                activeBtnType: "ButtonMenuActive"
            },
            mains: {
                label: "MAINS",
                btnType: "ButtonMenu",
                activeBtnType: "ButtonMenuActive"
            },
            beverages: {
                label: "BEVERAGES",
                btnType: "ButtonMenu",
                activeBtnType: "ButtonMenuActive"
            },
            liquor: {
                label: "LIQUOR",
                btnType: "ButtonMenu",
                activeBtnType: "ButtonMenuActive"
            }
        },
        menu: {
            appetizers: [
                {
                    dishId: 1,
                    dish: "Chicken Soup",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
                    price: 8,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 2,
                    dish: "Caprese Salad",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
                    price: 7.5,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 3,
                    dish: "Polpette",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/3-3.jpg",
                    price: 7,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 4,
                    dish: "Caprino",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/5-1.jpg",
                    price: 8.75,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 5,
                    dish: "Calamary",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/6-1.jpg",
                    price: 11,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
            ],
            mains: [
                {
                    dishId: 6,
                    dish: "Chicken Soup",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
                    price: 8,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 7,
                    dish: "Caprese Salad",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
                    price: 7.5,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 8,
                    dish: "Polpette",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/3-3.jpg",
                    price: 7,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 9,
                    dish: "Caprino",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/5-1.jpg",
                    price: 8.75,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
            ],
            beverages: [
                {
                    dishId: 10,
                    dish: "Chicken Soup",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
                    price: 8,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 11,
                    dish: "Caprese Salad",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
                    price: 7.5,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 12,
                    dish: "Polpette",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/3-3.jpg",
                    price: 7,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
            ],
            liquor: [
                {
                    dishId: 13,
                    dish: "Chicken Soup",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
                    price: 8,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
                {
                    dishId: 14,
                    dish: "Caprese Salad",
                    image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
                    price: 7.5,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
            ],
        }
    }

    handleShowModal = () => {
        this.setState({showModal: true});
    }

    handleCloseModal = () => {
        this.setState({showModal: false});
    }

    handleCategoryChanged = (category) => {
        this.setState({category: category});
    }

    handleAddToOrder = (item) => {
        this.setState({selectedDish: item});
        this.handleShowModal();
        // this.props.addItemToOrder(item);
    }

    processAddToOrder = (values) => {
        console.log("Add item to order");
        console.log(values);
    }

    render() {
        
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox  link="menu"
                            title="MENU"
                            caption="FOOD & DRINKS"
                >
                </HeaderBox>

                {/* Menu Controls */}
                <MenuControls 
                    categorySelected={this.handleCategoryChanged} 
                    categories={this.state.categories}
                    activeCategory={this.state.category}/>

                {/* Menu Listing */}
                <MenuListing 
                    dishes={this.state.menu[this.state.category]}
                    add={this.handleAddToOrder}
                />

                {/* Modal for AddDialog */}
                <BSModal
                    show={this.state.showModal} 
                    onHide={this.handleCloseModal}                    
                    classNames="Modal"
                    centered
                    title={this.state.selectedDish.dish}
                >
                    <AddDialog 
                        data={this.state.selectedDish}
                        btnType="ButtonFormSmall"
                        btnAction={this.processAddToOrder}
                        btnLabel="Add to order"
                    />
                </BSModal>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentOrderItems: state.order.currentOrderItems,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: (item) => dispatch(actions.addToOrder(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);