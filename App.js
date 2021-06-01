import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './routes/homeStack';
import NestedHomeNavigator from './routes/NestedHomeStack'


const MyStack = () => {
  return (
    <>
    <NavigationContainer>
      <HomeNavigator/>
      <NestedHomeNavigator/>
    </NavigationContainer>
    
    </>
  );
};
4
export default MyStack