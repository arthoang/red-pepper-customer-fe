import React, { Component }  from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, withRouter  } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Menu from './containers/Menu/MenuContainer';
import Contact from './containers/Contact/ContactContainer';
import Gallery from './containers/Gallery/GalleryContainer';
import Home from './containers/Home/HomeContainer';

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
              <Route path='/login' component={Auth} />
              <Route path='/logout' component={Logout} />
              <Route path='/home' component={Home} />
              <Route path='/menu' component={Menu} />
              <Route path='/contact' component={Contact} />
              <Route path='/gallery' component={Gallery} />

              
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
