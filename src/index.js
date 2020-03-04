import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//router
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

//async
import thunk from 'redux-thunk';

//reducer
import orderReducer from './store/reducers/OrderReducer';
import menuReducer from './store/reducers/MenuReducer';
import authReducer from './store/reducers/AuthReducer';




// firebase.initializeApp(firebaseConfig);

// export const AuthContext = React.createContext(null);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(
  {
    order: orderReducer,
    menu: menuReducer,
    auth: authReducer,
  }
)

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// const app = (
//   <FirebaseContext.Provider value={new Firebase()} store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </FirebaseContext.Provider>
// );

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
