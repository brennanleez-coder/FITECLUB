import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homestack from './routes/homeStack';
import NestedHomeNavigator from './routes/NestedHomeStack'


const MyStack = () => {
  return (
    <>
    <NavigationContainer>
      <Homestack/>

    </NavigationContainer>
    
    </>
  );
};
4
export default MyStack