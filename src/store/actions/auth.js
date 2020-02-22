import * as actionTypes from './actionTypes';
import axios from '../../axios-rp';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};  

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: email,
            password: password,
        }
        let url = '/auth';
        axios.post(url, authData)
            .then(response => {
                // time from API in seconds
                // new Date().getTime() return milliseconds

                // const issuedAt = new Date(response.data.issuedAt * 1000)
                // const expiry = new Date(response.data.expiry * 1000)

                // expiredIn in milliseconds
                const expiredIn = response.data.expiry * 1000 - new Date().getTime()      
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expiry', response.data.expiry * 1000);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('issuedAt', response.data.issuedAt * 1000);
                dispatch(authSuccess(response.data));
                dispatch(checkAuthTimeout(expiredIn));
            })
            .catch(err => {
                console.log("Error authenticating....:");
                console.log(err.response);
                dispatch(authFail(err.response));
            })
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
    localStorage.removeItem('userId');
    localStorage.removeItem('issuedAt');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    // experationTime in milliseconds
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

export const authSetRedirectPath = (path) => {
    return {
        type: actionTypes.AUTH_SET_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(+localStorage.getItem('expiry')); 
            
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {                
                const expirationTime = expirationDate.getTime() - new Date().getTime();
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess({token: token, userId: userId}));
                dispatch(checkAuthTimeout(expirationTime));
            }
            
        }
    }
}