import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    //data
    currentOrderItems: [],

};

const addToOrder = (state, action) => {
    const newItem = action.item;
    const newCurrentOrderItems = [...state.currentOrderItems];
    // check if there is existing order item
    let existingItems = newCurrentOrderItems.filter((item,idx) => {
        if (item.dishId ===newItem.dishId && item.notes === newItem.notes) {
            return {
                idx: item
            }
        }
    });
    
    // if exist, remove the item from array, update quantity, and push in again
    if (existingItems.length===1) {
        let existingItem = existingItems[0];
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        // remove
        for (let key in existingItems) {
            newCurrentOrderItems.splice(key, 1);
        }
        // push
        newCurrentOrderItems.push(existingItem);
        
    } else {
        // if not exist, push new item in
        newCurrentOrderItems.push(newItem);
    }
    
    return updateObject(state, {currentOrderItems: newCurrentOrderItems});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_ORDER: return addToOrder(state, action);
        default: return state;
    }
};

export default reducer;