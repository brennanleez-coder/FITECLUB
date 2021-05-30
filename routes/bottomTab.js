import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import NestedHome from '../screens/NestedHome'
import Profile from '../screens/Profile'

var bottomTab = createBottomTabNavigator();

export default function bottomTabHandler() {
    return (
    <bottomTab.Navigator>
      <bottomTab.Screen name="NestedHome" component={NestedHome} />
      <bottomTab.Screen name="Profile" component={Profile} />
    </bottomTab.Navigator>
    )
}