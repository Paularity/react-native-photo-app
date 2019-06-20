import React from 'react';
import { createAppContainer, createSwitchNavigator, SwitchActions } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';
import AuthNavigator from './AuthNavigator';

import * as firebase from 'firebase';

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isAuthenticated: false,
      isAuthenticationReady: false
    });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    console.log("User: " + user);
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });

    console.log(this.state.isAuthenticated);

    if (!this.state.isAuthenticated) 
    {
      this.navigator &&
        this.navigator.dispatch(
          SwitchActions.jumpTo({ routeName: 'Auth' })
        );
    }

  }

  render() {
    return <AppContainer ref={nav => { this.navigator = nav }} />;
  }
}

const AppNav = createSwitchNavigator(
  {
    Main: MainDrawerNavigator,
    Auth: AuthNavigator,    
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const AppContainer = createAppContainer(AppNav);
