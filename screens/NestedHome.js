import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile'
import Search from '../screens/Search'
import Rankings from '../screens/Ranking'
import Explore from '../screens/Slider'
import FAQ from '../screens/Faq'

const Tab = createBottomTabNavigator();
const Home = ({navigation}) => {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Explore" component={ Explore } />
          <Tab.Screen name="Search" component={ Search} />
          <Tab.Screen name="Profile" component={ Profile } />
          <Tab.Screen name="View Rankings" component={ Rankings } />
          <Tab.Screen name="FAQ" component={ FAQ } />
      </Tab.Navigator>
  )
}

export default Home;
