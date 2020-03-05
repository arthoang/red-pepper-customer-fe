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
        menuControlBtn: {
            btnType: "ButtonMenu",
            activeBtnType: "ButtonMenuActive",
        },
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

    updateActiveCatToDefault = () => {
        let updatedState = {};
        const defaultCategoryName = 'APPETIZERS';
        let activeCategory = null;
        this.props.categories.forEach(category => {
            if (category.name===defaultCategoryName) {
                activeCategory = category.uuid;
            }
        });
        updatedState['category'] = activeCategory;
        this.setState(updatedState);
    }

    componentDidMount = () => {
        if (!this.props.menu) {
            // fetch menu if it is null
            this.props.fetchMenu();
        } else {
            //update active cat with default category
            this.updateActiveCatToDefault();
        }
    }


    componentDidUpdate = (prevProps, prevState) => {
        
        if (this.props.categories && prevState.category === null) {        
            this.updateActiveCatToDefault();
        }
    }

    render() {
        let menuUi = <Spinner />
        if (!this.props.fetchMenuLoading && this.props.menu && this.state.category) {
            menuUi = (
                <React.Fragment>
                    {/* Menu Controls */}
                    <MenuControls 
                        categorySelected={this.handleCategoryChanged} 
                        categories={this.props.categories}
                        btnStyles = {this.state.menuControlBtn}
                        activeCategory={this.state.category}
                        />

                    {/* Menu Listing */}
                    <MenuListing 
                        menu={this.props.menu[this.state.category]}
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
        fetchMenuLoading: state.menu.fetchMenuLoading,
        fetchMenuError: state.menu.fetchMenuError,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: (item) => dispatch(actions.processAddToOrder(item)),
        fetchMenu: () => dispatch(actions.fetchMenu()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);