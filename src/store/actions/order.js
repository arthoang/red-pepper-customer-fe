import * as actionTypes from './actionTypes';
import axios from '../../axios-rp';

export const addToOrder = (item) => {
    return dispatch => {
        dispatch(
            {
                type: actionTypes.ADD_TO_ORDER,
                item: item
            }
        );
    }
};

