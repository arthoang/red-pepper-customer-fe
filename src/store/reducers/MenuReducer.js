import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    //data
    categories: null,
    subCategories: null,
    rawMenu: null,
    menu: null,
    // UI and error handling
    fetchMenuLoading: false,
    fetchMenuError: null,
    fetchCatError: null,
    fetchSubCatError: null,
    fetchRawMenuError: null
};



//fetch menu
const fetchMenuStart = (state, action) => {
    return updateObject(state, {menu: null, 
                                categories: null,
                                subCategories: null,
                                fetchMenuLoading: true, 
                                fetchMenuError: null});
}

const fetchMenuSuccess = (state, action) => {
    return updateObject(state, {menu: action.menu, 
                                fetchMenuLoading: false, 
                                fetchMenuError: null});
}

const fetchMenuFailed = (state, action) => {
    return updateObject(state, {menu: null, 
                                fetchMenuLoading: false, 
                                fetchMenuError: action.error
                        });
}

const fetchCatSuccess = (state, action) => {
    return updateObject(state, {
        categories: action.categories,
        fetchCatError: null,
    })
}

const fetchCatFailed = (state, action) => {
    return updateObject(state, {
        categories: null,
        fetchCatError: action.error,
    })
}

const fetchSubCatSuccess = (state, action) => {
    return updateObject(state, {
        subCategories: action.subCategories,
        fetchSubCatError: null,
    })
}

const fetchSubCatFailed = (state, action) => {
    return updateObject(state, {
        subCategories: null,
        fetchSubCatError: action.error,
    })
}

const fetchRawMenuSuccess = (state, action) => {
    return updateObject(state, {
        rawMenu: action.rawMenu,
        fetchRawMenuError: null,
    })
}

const fetchRawMenuFailed = (state, action) => {
    return updateObject(state, {
        rawMenu: null,
        fetchRawMenuError: action.error,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MENU_START: return fetchMenuStart(state, action);
        case actionTypes.FETCH_MENU_SUCCESS: return fetchMenuSuccess(state, action);
        case actionTypes.FETCH_MENU_FAILED: return fetchMenuFailed(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS:  return fetchCatSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAILED: return fetchCatFailed(state, action);
        case actionTypes.FETCH_SUB_CATEGORIES_SUCCESS: return fetchSubCatSuccess(state, action);
        case actionTypes.FETCH_SUB_CATEGORIES_FAILED: return fetchSubCatFailed(state, action);
        case actionTypes.FETCH_RAW_MENU_SUCCESS: return fetchRawMenuSuccess(state, action);
        case actionTypes.FETCH_RAW_MENU_FAILED: return fetchRawMenuFailed(state, action);
        
        default: return state;
    }
};

export default reducer;