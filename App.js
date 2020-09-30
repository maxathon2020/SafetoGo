/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import NavigationService from './src/services/NavigationService';
import StackNavigator from './src/StackNavigator';

const App: () => React$Node = (props) => {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <StackNavigator
        screenProps={props}
      />
    </NavigationContainer>
  );
};

export default App;
