import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Landing from './screens/Landing';

enableScreens();
const Stack = createNativeStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={'Landing'} component={Landing}/>
    </Stack.Navigator>
  )
}

export default StackNavigator;

