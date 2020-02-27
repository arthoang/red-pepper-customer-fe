import * as actionTypes from './actionTypes';
//import axios from '../../axios-rp';

export const addToOrder = (item) => {
    return {
        type: actionTypes.ADD_TO_ORDER,
        item: item
    }
};

export const removeFromOrder = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_ORDER,
        item: item
    }
}

export const calculateAmounts = () => {
    return {
        type: actionTypes.CALC_AMOUNTS,
    }
}

export const processAddToOrder = (item) => {
    return dispatch => {
        dispatch(addToOrder(item));
        dispatch(calculateAmounts());
    }
}

export const processRemoveFromOrder = (item) => {
    return dispatch => {
        dispatch(removeFromOrder(item));
        dispatch(calculateAmounts());
    }
}

