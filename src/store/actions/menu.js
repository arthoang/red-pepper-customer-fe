import * as actionTypes from './actionTypes';
// import { firestore } from '../../components/Firebase/Firebase';
import firebase from '../../components/Firebase/Firebase';

// fetch main categories
const fetchCatStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START,
    }
}

const fetchCatSuccess = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories,
    }
}

const fetchCatFailed = (error) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED,
        error: error,
    }
}

export const fetchMainCategories = () => {
    let catCollection = firebase.firestore().collection("mainCategories");
    return dispatch => {
        dispatch(fetchCatStart());
        //get all
        catCollection.orderBy("index").get()
        .then(querySnapshot => {
            let result = [];
            // data structure:
            // result = [
            //     {
            //         uid: uid,
            //         name: name,
            //     }
            // ]
            querySnapshot.forEach(doc => {
                let item = {};
                for (let key in doc.data()) {
                    item[key] = doc.data()[key]
                }
                result.push(item);
            })
            dispatch(fetchCatSuccess(result));
        })
        .catch(error => {
            dispatch(fetchCatFailed(error));
        })
        ;
    }
}

// fetch sub categories
const fetchSubCatStart = () => {
    return {
        type: actionTypes.FETCH_SUB_CATEGORIES_START,
    }
}

const fetchSubCatSuccess = (categories) => {
    return {
        type: actionTypes.FETCH_SUB_CATEGORIES_SUCCESS,
        categories: categories,
    }
}

const fetchSubCatFailed = (error) => {
    return {
        type: actionTypes.FETCH_SUB_CATEGORIES_FAILED,
        error: error,
    }
}

export const fetchSubCategories = () => {
    
    let subCatCollection = firebase.firestore().collection("categories");
    return dispatch => {
        dispatch(fetchSubCatStart());
        //get all
        subCatCollection.orderBy("index").get()
        .then(querySnapshot => {
            let result = [];
            querySnapshot.forEach(doc => {
                let item = {};
                for (let key in doc.data()) {
                    item[key] = doc.data()[key]
                }
                result.push(item);
            })
            dispatch(fetchSubCatSuccess(result));
        })
        .catch(error => {
            dispatch(fetchSubCatFailed(error));
        })
        ;
    }
}

// fetch menu
const fetchMenuStart = () => {
    return {
        type: actionTypes.FETCH_MENU_START,
    }
}

const fetchMenuSuccess = (menu) => {
    return {
        type: actionTypes.FETCH_MENU_SUCCESS,
        menu: menu,
    }
}

const fetchMenuFailed = (error) => {
    return {
        type: actionTypes.FETCH_MENU_FAILED,
        error: error,
    }
}

export const fetchMenu = () => {
    let menuCollection = firebase.firestore().collection("dishes");
    return dispatch => {
        dispatch(fetchMenuStart());
        //get all
        menuCollection.get()
        .then(querySnapshot => {
            let result = [];
            querySnapshot.forEach(doc => {
                let item = {};
                for (let key in doc.data()) {
                    item[key] = doc.data()[key]
                }
                result.push(item);
            })
            dispatch(fetchMenuSuccess(result));
        })
        .catch(error => {
            dispatch(fetchMenuFailed(error));
        })
        ;
    }
}