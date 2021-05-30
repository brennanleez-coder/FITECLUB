import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/homeStack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Navigator />
  );
};

export default MyStack