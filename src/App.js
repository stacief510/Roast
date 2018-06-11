import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path='/roast' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' render={ (props) => <Login {...props} setCurrentUser={this.setCurrentUser} /> } />
          {/* <Route exact path='/roast/find' component={Map} /> */}
          <Route exact path='/roast/users/:user_id/drinks' component={PostContainer} />
          <Route exact path='/roast/users/:user_id/drinks/:drink_id' component={Drink} />
      </Switch>
      </div>
    );
  }
}

export default App;
