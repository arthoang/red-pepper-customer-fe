import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    //data
    currentOrderItems: [],
    currentOrderGST: 0,
    currentOrderPST: 0,
    currentOrderTotalBeforeTaxes: 0,
    currentOrderTotalAfterTaxes: 0,
    paymentStatus: "Paid",
    paymentMethod: "Visa",
    customer: null,
    newOrderId: "",
};

const addToOrder = (state, action) => {
    const newItem = action.item;
    const newCurrentOrderItems = [...state.currentOrderItems];
    // check if there is existing order item
    let existingItems = [];
    for (let i = 0; i < newCurrentOrderItems.length; i++) {
        let item = newCurrentOrderItems[i];
        if (item.dishId ===newItem.dishId && item.notes === newItem.notes) {
            existingItems.push(i);
        }
    }
    
    // if exist, update the quantity of item in array using index
    if (existingItems.length===1) {
        let existingItemIndex = existingItems[0];
        let newQuantity = newCurrentOrderItems[existingItemIndex].quantity + newItem.quantity;
        //update item quantity
        newCurrentOrderItems[existingItemIndex].quantity = newQuantity;
    } else {
        // if not exist, push new item in
        newCurrentOrderItems.push(newItem);
    }
    return updateObject(state, {currentOrderItems: newCurrentOrderItems});
}

const removeFromOrder = (state, action) => {
    
    const newItem = action.item;
    const newCurrentOrderItems = [...state.currentOrderItems];
    // check if there is existing order item
    for (let i = 0; i < newCurrentOrderItems.length; i++) {
        let item = newCurrentOrderItems[i];
        
        if (item.dishId ===newItem.dishId && item.notes === newItem.notes) {
            newCurrentOrderItems.splice(i, 1);
            break;
        }
    }
    
    return updateObject(state, {currentOrderItems: newCurrentOrderItems});
}

const calculateAmounts = (state, action) => {
    let gst = 0;
    let pst = 0;
    let subTotal = 0;
    let total = 0;

    state.currentOrderItems.forEach(item => {
        gst = gst + (item.price * item.quantity * 5) / 100;
        pst = pst + (item.price * item.quantity * 6) / 100;
        subTotal = subTotal + (item.price * item.quantity);
        total = gst + pst + subTotal;
    });
    return updateObject(state, {
        currentOrderGST: Number.parseFloat(gst.toFixed(2)),
        currentOrderPST: Number.parseFloat(pst.toFixed(2)),
        currentOrderTotalBeforeTaxes: Number.parseFloat(subTotal.toFixed(2)),
        currentOrderTotalAfterTaxes: Number.parseFloat(total.toFixed(2)),
    });
}

const saveCustomerInfo = (state, action) => {
    return updateObject(state, {customer: action.customer});
}

const saveOrderId = (state, action) => {
    return updateObject(state, {newOrderId: action.orderId});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_ORDER: return addToOrder(state, action);
        case actionTypes.REMOVE_FROM_ORDER: return removeFromOrder(state, action);
        case actionTypes.CALC_AMOUNTS: return calculateAmounts(state, action);
        case actionTypes.SAVE_CUSTOMER_INFO: return saveCustomerInfo(state, action);
        case actionTypes.SAVE_ORDER_ID: return saveOrderId(state, action);
        default: return state;
    }
};

export default reducer;