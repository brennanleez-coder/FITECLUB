import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ImageBackground,
  StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NestedHome from '../screens/NestedHome'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import Rankings from '../screens/Ranking'

const Tab = createBottomTabNavigator();

export const Home = ({navigation}) => {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Search" component={ Search} />
          <Tab.Screen name="Profile" component={ Profile } />
          <Tab.Screen name="View Rankings" component={ Rankings } />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {        
    flex: 1,
    justifyContent: 'center',

  },
  search: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Home;
