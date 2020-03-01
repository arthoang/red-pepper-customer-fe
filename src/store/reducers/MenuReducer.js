import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    //data
    categories: null,
    subCategories: null,
    menu: null,
    // UI and error handling
    fetchCatLoading: false,
    fetchCatError: null,
    fetchSubCatLoading: false,
    fetchSubCatError: null,
    fetchMenuLoading: false,
    fetchMenuError: null,
};

//fetch Categories
const fetchCatStart = (state, action) => {
    return updateObject(state, {categories: null, fetchCatLoading: true, fetchCatError: null});
}

const fetchCatSuccess = (state, action) => {
    return updateObject(state, {categories: action.categories, fetchCatLoading: false, fetchCatError: null});
}

const fetchCatFailed = (state, action) => {
    return updateObject(state, {categories: null, fetchCatLoading: false, fetchCatError: action.error});
}

//fetch Sub Categories
const fetchSubCatStart = (state, action) => {
    return updateObject(state, {subCategories: null, fetchSubCatLoading: true, fetchSubCatError: null});
}

const fetchSubCatSuccess = (state, action) => {
    return updateObject(state, {subCategories: action.categories, fetchSubCatLoading: false, fetchSubCatError: null});
}

const fetchSubCatFailed = (state, action) => {
    return updateObject(state, {subCategories: null, fetchSubCatLoading: false, fetchSubCatError: action.error});
}

//fetch menu
const fetchMenuStart = (state, action) => {
    return updateObject(state, {menu: null, fetchMenuLoading: true, fetchMenuError: null});
}

const fetchMenuSuccess = (state, action) => {
    return updateObject(state, {menu: action.menu, fetchMenuLoading: false, fetchMenuError: null});
}

const fetchMenuFailed = (state, action) => {
    return updateObject(state, {menu: null, fetchMenuLoading: false, fetchMenuError: action.error});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchCatStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCatSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAILED: return fetchCatFailed(state, action);
        case actionTypes.FETCH_SUB_CATEGORIES_START: return fetchSubCatStart(state, action);
        case actionTypes.FETCH_SUB_CATEGORIES_SUCCESS: return fetchSubCatSuccess(state, action);
        case actionTypes.FETCH_SUB_CATEGORIES_FAILED: return fetchSubCatFailed(state, action);
        case actionTypes.FETCH_MENU_START: return fetchMenuStart(state, action);
        case actionTypes.FETCH_MENU_SUCCESS: return fetchMenuSuccess(state, action);
        case actionTypes.FETCH_MENU_FAILED: return fetchMenuFailed(state, action);
        
        default: return state;
    }
};

export default reducer;