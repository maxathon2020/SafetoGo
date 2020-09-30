import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Landing from './screens/Landing';
import LocationAccess from './screens/LocationAccess';
import Questionnaire1 from './screens/Questionaire1';

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
      <Stack.Screen name={'LocationAccess'} component={LocationAccess}/>
      <Stack.Screen name={'Questionnaire1'} component={Questionnaire1}/>
    </Stack.Navigator>
  )
}

export default StackNavigator;

