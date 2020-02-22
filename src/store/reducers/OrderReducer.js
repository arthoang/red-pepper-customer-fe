import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    //data
    currentOrderItems: [],

};

const addToOrder = (state, action) => {
    
    const newCurrentOrderItems = [...state.currentOrderItems, action.item];
    return updateObject(state, {currentOrderItems: newCurrentOrderItems});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_ORDER: return addToOrder(state, action);
        default: return state;
    }
};

export default reducer;