import * as actionTypes from './actionTypes';
//import axios from '../../axios-rp';
// import { firestore } from '../../components/Firebase/Firebase';
import firebase from '../../components/Firebase/Firebase';

//cart actions
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

// checkout actions
export const saveCustomerInfo = (customer) => {
    return {
        type: actionTypes.SAVE_CUSTOMER_INFO,
        customer: customer,
    }

}

export const processSaveCustomerInfo = (customer) => {
    return dispatch => {
        dispatch(saveCustomerInfo(customer));
    }
}

export const saveOrderId = (orderId) => {
    return {
        type: actionTypes.SAVE_ORDER_ID,
        orderId: orderId,
    }
}

export const generateOrderId = () => {
    const now = new Date();
    const min = 1;
    const max = 10000;
    const rand = min + Math.floor(Math.random() * (max - min));
    const orderId = "" + now.getFullYear() + "" + now.getUTCMonth() + "-" + rand;
    return dispatch => {
        dispatch(saveOrderId(orderId));
    }
}

//firebase
export const fetchAllOrders = (data) => {
    return {
        type: actionTypes.FETCH_ALL_ORDERS,
        orders: data,
    }
}
// submit order
export const submitOrderStart = () => {
    return {
        type: actionTypes.SUBMIT_ORDER_START,
    }
}

export const submitOrderSuccess = () => {
    return {
        type: actionTypes.SUBMIT_ORDER_SUCCESS,
    }
}

export const submitOrderFailed = (error) => {
    return {
        type: actionTypes.SUBMIT_ORDER_FAILED,
        error: error,
    }
}

// fetch order
export const processFetchAllOrder = () => {
    let dishesRef = firebase.firestore().collection("dishes");
    return dispatch => {
        dishesRef.get()
        .then(querySnapshot => {
            let result = [];
            querySnapshot.forEach(doc => {
                result.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            dispatch(fetchAllOrders(result));
        })
        .catch(err => {
            console.log("Error getting documents: " + err);
        })
        ;
    }
}

export const submitOrder = (order) => {
    let orderRef = firebase.firestore().collection("orders");
    return dispatch => {
        dispatch(submitOrderStart());
        orderRef.doc().set(order)
        .then(() => dispatch(submitOrderSuccess()))
        .catch(error => dispatch(submitOrderFailed(error)));
    }
}