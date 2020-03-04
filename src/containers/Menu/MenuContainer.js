import React, { Component } from 'react';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import MenuControls from '../../components/Menu/MenuControls/MenuControls';
import MenuListing from '../../components/Menu/MenuListing/MenuListing';
import AddDialog from '../../components/Order/AddDialog/AddDialog';
import BSModal from '../../components/UI/BSModal/BSModal';
import Spinner from '../../components/UI/Spinner/Spinner';

//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class MenuContainer extends Component {
    state = {
        showModal: false,
        selectedDish: {},
        category: null,
        categories: {
            btnType: "ButtonMenu",
            activeBtnType: "ButtonMenuActive",
            items: null,
        },
        menu: null,

        // menu: {
        //     '1eb45a0e-4938-4495-94e1-f5639239c8f1': [
        //         {
        //             dishId: 1,
        //             dish: "Chicken Soup",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
        //             price: 8,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 2,
        //             dish: "Caprese Salad",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
        //             price: 7.5,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 3,
        //             dish: "Polpette",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/3-3.jpg",
        //             price: 7,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 4,
        //             dish: "Caprino",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/5-1.jpg",
        //             price: 8.75,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 5,
        //             dish: "Calamary",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/6-1.jpg",
        //             price: 11,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //     ],
        //     mains: [
        //         {
        //             dishId: 6,
        //             dish: "Chicken Soup",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
        //             price: 8,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 7,
        //             dish: "Caprese Salad",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
        //             price: 7.5,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 8,
        //             dish: "Polpette",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/3-3.jpg",
        //             price: 7,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 9,
        //             dish: "Caprino",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/5-1.jpg",
        //             price: 8.75,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //     ],
        //     beverages: [
        //         {
        //             dishId: 10,
        //             dish: "Chicken Soup",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
        //             price: 8,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 11,
        //             dish: "Caprese Salad",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
        //             price: 7.5,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 12,
        //             dish: "Polpette",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/3-3.jpg",
        //             price: 7,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //     ],
        //     liquor: [
        //         {
        //             dishId: 13,
        //             dish: "Chicken Soup",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/1-4.jpg",
        //             price: 8,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //         {
        //             dishId: 14,
        //             dish: "Caprese Salad",
        //             image: "http://nhit.sg-host.com/wp-content/uploads/2017/03/2-3.jpg",
        //             price: 7.5,
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        //         },
        //     ],
        // }
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
    }

    processAddToOrder = (values) => {
        let item = {...this.state.selectedDish};
        for (let key in values) {
            item[key] = values[key];
        }
        this.props.addItemToOrder(item);
        // close modal and complete the process
        this.handleCloseModal();
    }

    componentDidMount = () => {
        if (!this.state.categories.items) {
            //fetch main categories
            this.props.fetchCategories();
        }
        if (!this.state.subCategories) {
            //fetch sub categories
            this.props.fetchSubCategories();
        }
        if (!this.state.menu) {
            // fetch menu
            this.props.fetchMenu();
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        let updatedState = {};
        if (this.props.categories) {
            if (!prevProps.categories) {
                const defaultCategoryName = 'APPETIZERS';
                let activeCategory = null;
                this.props.categories.forEach(category => {
                    if (category.name===defaultCategoryName) {
                        activeCategory = category.uuid;
                    }
                });
                updatedState['category'] = activeCategory;
                updatedState['categories'] = {
                    ...this.state.categories,
                    items: this.props.categories,
                }
                this.setState(updatedState);
                // this.setState({
                //     category: activeCategory,
                //     categories: {
                //         ...this.state.categories,
                //         items: this.props.categories
                //     }
                // });
            }
        }

        if (this.props.menu && this.props.subCategories && this.props.categories
            && (!prevProps.categories || !prevProps.subCategories || !prevProps.menu)
            ) {
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
            let menu = {};
            
            this.props.categories.forEach(cat => {
                //get items for each cat
                let mainCatObj = {};

                //this is array of dishes that have this main cat uuid
                let menuCatItems = this.props.menu.filter(item => {
                    return item.mainCatUuid === cat.uuid;
                })

                let hasSubcat = false;
                //check if this cat has subcat
                const nullSubCatItems = menuCatItems.filter(item => {
                    return ((!item.categoryUuid) || (item.categoryUuid && item.categoryUuid.length === 0));
                })
                // if exist, this cat has no subcat
                if (nullSubCatItems.length > 0) {
                    hasSubcat = false
                } else {
                    hasSubcat = true
                }
                // update the main cat object to reflect this property
                mainCatObj['hasSubcat'] = hasSubcat;

                // construct object based on hasSubcat
                
                if (hasSubcat) {
                    // if this cat has subcat, iterate into another layer
                    mainCatObj['items'] = {}
                    this.props.subCategories.forEach(subCat => {

                        //get items that has this subcat
                        const subCatItems = menuCatItems.filter(item => {
                            return item.categoryUuid === subCat.uuid;
                        });
                        if (subCatItems.length > 0) {
                            //update the mainCatObj: key = this subCat uuid, value = array of dishes that have the subCat uuid
                            mainCatObj['items'][subCat.uuid] = subCatItems
                        }
                    });
                } else {
                    // if this cat has no subcat, update mainCatObj
                    // key = items
                    // value = array of dishes that have the cat uuid
                    mainCatObj['items'] = menuCatItems;
                }
                // add mainCatObj to menu
                menu[cat.uuid] = mainCatObj;
            });
            updatedState['menu'] = menu;
            this.setState(updatedState);
        }

        //update state
        //this.setState(updatedState);
        
    }

    render() {
        let menuUi = <Spinner />
        if (this.props.menu) {
            
        }
        if (this.state.menu) {
            
        }


        if (!this.props.fetchCatLoading && !this.props.fetchSubCatLoading && !this.props.fetchMenuLoading
            && this.state.categories.items && this.props.subCategories && this.state.menu) {
            menuUi = (
                <React.Fragment>
                    {/* Menu Controls */}
                    <MenuControls 
                        categorySelected={this.handleCategoryChanged} 
                        categories={this.state.categories}
                        activeCategory={this.state.category}
                        />

                    {/* Menu Listing */}
                    <MenuListing 
                        menu={this.state.menu[this.state.category]}
                        subCategories = {this.props.subCategories}
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
            )
        }
        
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox  link="menu"
                            title="MENU"
                            caption="FOOD & DRINKS"
                >
                </HeaderBox>
                {menuUi}
                

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentOrderItems: state.order.currentOrderItems,
        categories: state.menu.categories,
        subCategories: state.menu.subCategories,
        menu: state.menu.menu,
        // UI and errors
        fetchCatLoading: state.menu.fetchCatLoading,
        fetchCatError: state.menu.fetchCatError,
        fetchSubCatLoading: state.menu.fetchSubCatLoading,
        fetchSubCatError: state.menu.fetchSubCatError,
        fetchMenuLoading: state.menu.fetchMenuLoading,
        fetchMenuError: state.menu.fetchMenuError,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: (item) => dispatch(actions.processAddToOrder(item)),
        fetchCategories: () => dispatch(actions.fetchMainCategories()),
        fetchSubCategories: () => dispatch(actions.fetchSubCategories()),
        fetchMenu: () => dispatch(actions.fetchMenu()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);