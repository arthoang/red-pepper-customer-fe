import React, { Component } from 'react';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import MenuControls from '../../components/Menu/MenuControls/MenuControls';
import MenuListing from '../../components/Menu/MenuListing/MenuListing';

//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class MenuContainer extends Component {
    state = {
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

    handleCategoryChanged = (category) => {
        this.setState({category: category});
    }

    handleAddToOrder = (item) => {
        console.log("Add item to order");
        this.props.addItemToOrder(item);
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