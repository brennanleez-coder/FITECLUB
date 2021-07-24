import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homestack from './routes/homeStack';



const MyStack = () => {
  return (
    <>
    <NavigationContainer >
      <Homestack/>
      
    </NavigationContainer>
    </>
  );
};

export default MyStack