import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Jokes from './Jokes';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  }
  render () {
    return (
      <>
        <h1>Welcome!</h1>

        <ul>
          <li><NavLink to='/signin'>Sign In!</NavLink></li>
          <li><NavLink to='/signup'>Sign Up!</NavLink></li>
          <li><NavLink to='/jokes'>Jokes!</NavLink></li>
          <li><button onClick={this.logout}>Log Out</button></li>
        </ul>

        <div>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/jokes' component={Jokes} />
        </div>
      </>
    );
  }

}

export default withRouter(App);
