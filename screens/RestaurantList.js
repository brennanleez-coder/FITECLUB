import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlterEgo from '../Restaurants/AlterEgo'
import BeautyInThePot from '../Restaurants/BeautyInThePot'
import BurntEnds from '../Restaurants/BurntEnds'
import DinTaiFung from '../Restaurants/DinTaiFung'
import FookKin from '../Restaurants/FookKin'
import GenkiSushi from '../Restaurants/GenkiSushi'
import HaiDiLao from '../Restaurants/HaiDiLao'
import KohGrill from '../Restaurants/KohGrill'
import Lawry from '../Restaurants/Lawry'
import ThreeMealsADay from '../Restaurants/ThreeMealsADAy'
import TwoManBagelHouse from '../Restaurants/TwoManBagelHouse'
import RestaurantList from '../screens/RestaurantListWithButtons'


//allow app to run without any issues

const MyStack = () => {
    return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RestaurantList"
            component={RestaurantList}
            options={{ title: 'List Of Restaurants' }}
          />
          <Stack.Screen name="AlterEgo" component={AlterEgo} />
          <Stack.Screen name="BeautyInThePot" component={BeautyInThePot} />
          <Stack.Screen name="BurntEnds" component={BurntEnds} />
          <Stack.Screen name="DinTaiFung" component={DinTaiFung} />
          <Stack.Screen name="FookKin" component={FookKin} />
          <Stack.Screen name="GenkiSushi" component={GenkiSushi} />
          <Stack.Screen name="HaiDiLao" component={HaiDiLao} />
          <Stack.Screen name="KohGrill" component={KohGrill} />
          <Stack.Screen name="Lawry" component={Lawry} />
          <Stack.Screen name="ThreeMealsADay" component={ThreeMealsADay} />
          <Stack.Screen name="TwoManBagelHouse" component={TwoManBagelHouse} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default MyStack