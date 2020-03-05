import * as actionTypes from './actionTypes';
// import { firestore } from '../../components/Firebase/Firebase';
import firebase from '../../components/Firebase/Firebase';

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

const fetchRawMenuSuccess = (rawMenu) => {
    return {
        type: actionTypes.FETCH_RAW_MENU_SUCCESS,
        rawMenu: rawMenu,
    }
}

const fetchRawMenuFailed = (error) => {
    return {
        type: actionTypes.FETCH_RAW_MENU_FAILED,
        error: error,
    }
}

const fetchCatSuccess = (categories) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories,
    }
}

const fetchSubCatSuccess = (subCategories) => {
    return {
        type: actionTypes.FETCH_SUB_CATEGORIES_SUCCESS,
        subCategories: subCategories,
    }
}

const fetchCatFailed = (error) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED,
        error: error,
    }
}

const fetchSubCatFailed = (error) => {
    return {
        type: actionTypes.FETCH_SUB_CATEGORIES_FAILED,
        error: error,
    }
}

const fetchCategories = () => {
    // data structure:
        // result = [
        //     {
        //         uid: uid,
        //         name: name,
        //     }
        // ]
    let catCollection = firebase.firestore().collection("mainCategories");
    let categories = null;
    return async dispatch => {
        try {
            const querySnapshot = await catCollection.orderBy("index").get();
            categories = [];
            querySnapshot.forEach(doc => {
                let item = {};
                for (let key in doc.data()) {
                    item[key] = doc.data()[key]
                }
                categories.push(item);
            });
            dispatch(fetchCatSuccess(categories));
            
        } catch(error) {
            dispatch(fetchCatFailed(error));
            throw error;
        }
    }
}

const fetchSubCategories = () => {
    let subCatCollection = firebase.firestore().collection("categories");
    let subCategories = null;
    return async dispatch => {
        try {
            const querySnapshot = await subCatCollection.orderBy("index").get();
            subCategories = [];
            querySnapshot.forEach(doc => {
                let item = {};
                for (let key in doc.data()) {
                    item[key] = doc.data()[key]
                }
                subCategories.push(item);
            });
            dispatch(fetchSubCatSuccess(subCategories))
        } catch (error) {
            dispatch(fetchSubCatFailed(error));
            throw error;
        }
    }
}
    

const fetchRawMenu = () => {
    let menuCollection = firebase.firestore().collection("dishes");
    let rawMenu = null;
    return async dispatch => {
        try {
            const querySnapshot = await menuCollection.get();
            rawMenu = [];
            querySnapshot.forEach(doc => {
                let item = {};
                for (let key in doc.data()) {
                    item[key] = doc.data()[key]
                }
                rawMenu.push(item);
            });
            dispatch(fetchRawMenuSuccess(rawMenu));
        }catch (error) {
            dispatch(fetchRawMenuFailed(error));
            throw error;
        }
    }
    
}

const constructMenu = () => {
    return async (dispatch, getState) => {
        let menu = {};
        let categories = getState().menu.categories;
        let subCategories = getState().menu.subCategories;
        let rawMenu = getState().menu.rawMenu;
        if (categories && subCategories && rawMenu && 
            categories.length > 0 && subCategories.length > 0 && rawMenu.length > 0) {
                
                categories.forEach(cat => {
                //get items for each cat
                let mainCatObj = {};
    
                //this is array of dishes that have this main cat uuid
                let menuCatItems = rawMenu.filter(item => {
                    return item.mainCatUuid === cat.uuid;
                });
    
                let hasSubcat = false;
                //check if this cat has subcat
                const nullSubCatItems = menuCatItems.filter(item => {
                    return ((!item.categoryUuid) || (item.categoryUuid && item.categoryUuid.length === 0));
                })
                // if exist, this cat has no subcat
                if (nullSubCatItems.length > 0) {
                    hasSubcat = false
                } else {
                    hasSubcat = true
                }
                // update the main cat object to reflect this property
                mainCatObj['hasSubcat'] = hasSubcat;
    
                // construct object based on hasSubcat
                
                if (hasSubcat) {
                    // if this cat has subcat, iterate into another layer
                    mainCatObj['items'] = {}
                    subCategories.forEach(subCat => {
    
                        //get items that has this subcat
                        const subCatItems = menuCatItems.filter(item => {
                            return item.categoryUuid === subCat.uuid;
                        });
                        if (subCatItems.length > 0) {
                            //update the mainCatObj: key = this subCat uuid, value = array of dishes that have the subCat uuid
                            mainCatObj['items'][subCat.uuid] = subCatItems
                        }
                    });
                } else {
                    // if this cat has no subcat, update mainCatObj
                    // key = items
                    // value = array of dishes that have the cat uuid
                    mainCatObj['items'] = menuCatItems;
                }
                // add mainCatObj to menu
                menu[cat.uuid] = mainCatObj;
            });
            //dispatch success
            dispatch(fetchMenuSuccess(menu));
        }
    }
 }

export const fetchMenu = () => {
    return async dispatch => {
        try {
            dispatch(fetchMenuStart());        
            await dispatch(fetchCategories());        
            await dispatch(fetchSubCategories());
            await dispatch(fetchRawMenu());
            await dispatch(constructMenu());
        } catch(error) {
            throw error;
        }
    }
}