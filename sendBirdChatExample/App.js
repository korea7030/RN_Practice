import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import Profile from './src/screens/Profile';
import OpenChannel from './src/screens/OpenChannel';

import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OpenChannel" component={OpenChannel} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}

export default App;