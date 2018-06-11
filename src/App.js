import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Signup from './components/Register';
import Login from './component/Login';
import Home from './components/Home';
import Drink from './components/Drink';
import PostContainer from './containers/PostContainer';

class App extends Component {
  state = {
    currentUser: {},
    isAuthenticated: true,
  }

  componentDidMount() {
    let token;
    if (localStorage.getItem('jwtToken') === null) {
      this.setState({ isAuthenticated: false })
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      this.setState({ currentUser: token, isAuthenticated: true });
    }
  }

  setCurrentUser = (userData) => {
    this.setState({ currentUser: userData, isAuthenticated: true })
  }

  handleLogout = () => {
    if (localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken');
      this.setState({ currentUser: null, isAuthenticated: false });

    }
  }

  render() {
    console.log('current user', this.state.currentUser)

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.state.isAuthenticated === true
          ? <Component {...props} user={this.state.currentUser}  />
          : <Redirect to='/login' />
      )} />
    )

    return (
      <div className="App">
       <Switch>
          <Route exact path='/roast' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' render={ (props) => <Login {...props} setCurrentUser={this.setCurrentUser} /> } />
          {/* <Route exact path='/roast/find' component={Map} /> */}
          <PrivateRoute exact path='/roast/users/:user_id/drinks' component={PostContainer} />
          <PrivateRoute exact path='/roast/users/:user_id/drinks/:drink_id' component={Drink} />
      </Switch>
      </div>
    );
  }
}

export default App;
