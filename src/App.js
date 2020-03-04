import React, { Component }  from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, withRouter  } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Menu from './containers/Menu/MenuContainer';
import Contact from './containers/Contact/ContactContainer';
import Gallery from './containers/Gallery/GalleryContainer';
// import Home from './containers/Home/HomeContainer';
import Cart from './containers/Cart/CartContainer';
import * as ROUTES from './constants/routes';

import { connect } from 'react-redux';
// import Button from './components/UI/Button/Button';
import * as actions from './store/actions/';

class App extends Component {
  componentDidMount() {
    this.props.onAuthCheckState();
  }

  render() {
    return (
      <div>
        
          <Layout>
            <Switch>
              <Route path={ROUTES.SIGN_IN} component={Auth} />
              <Route path={ROUTES.SIGN_OUT} component={Logout} />
              <Route path={ROUTES.MENU} component={Menu} />
              <Route path={ROUTES.CART} component={Cart} />
              <Route path={ROUTES.CONTACT} component={Contact} />
              <Route path={ROUTES.GALLERY} component={Gallery} />
              
            </Switch>
            
  
            {/* <Button btnType="ButtonMenu">APPETIZERS</Button>
            <Button btnType="ButtonForm">REQUEST BOOKING</Button> */}
            
          </Layout>
        
      </div>
    );

  }
  
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
