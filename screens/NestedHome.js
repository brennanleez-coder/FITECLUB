import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//creates a blue outline 

import Profile from '../screens/Profile'
import Search from '../screens/Search'
import Rankings from '../screens/Ranking'
import Explore from '../screens/Explore.js'
import FAQ from '../screens/Faq'
import ToDoList from '../screens/ToDoList'
import KohGrill from'../Restaurants/KohGrill'

const Tab = createMaterialBottomTabNavigator();
//allow app to run without any issues
const EmptyScreen = () => {
    return (null)
}

const Home = ({navigation}) => {
        //options is for icons 
        //prevent default prevent default option from occuring
       //initialRouteName to set the initial route
  return (
        <Tab.Navigator initialRouteName="Explore">
        <Tab.Screen name="Explore" component={ Explore } 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />
                            ),
                        }}/>
        <Tab.Screen name="Search" component={ Search} 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="magnify" color={color} size={26} />
                            ),
                        }}/>
        <Tab.Screen name="Rankings" component={ Rankings } 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="star-circle" color={color} size={26} />
                            ),
                        }}/>
        <Tab.Screen name="FAQ" component={ FAQ } 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="message-processing" color={color} size={26} />
                            ),
                        }}/>
        <Tab.Screen name="ToDoList" component={ ToDoList } 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                            ),
                        }}/>
        
        <Tab.Screen name="Profile" component={ Profile } 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                            ),
                        }}/>
         <Tab.Screen name="KohGrill" component={ KohGrill } 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                            ),
                        }}/>                
        
      </Tab.Navigator>
      
      
  )
}

export default Home;
