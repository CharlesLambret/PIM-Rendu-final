import React, { Component, createContext } from 'react';
import { auth } from './firebase.js';

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
 state = {
   user: 'loading',
 };

 componentDidMount = () => {
    auth.onAuthStateChanged((userAuth) => {
      console.log('userAuth====>', userAuth);
      this.setState({ user: userAuth });
    });
};
render() {
  return (
    <UserContext.Provider value={this.state}>
       {this.props.children}
    </UserContext.Provider>
  );
}
}
export default UserProvider;
