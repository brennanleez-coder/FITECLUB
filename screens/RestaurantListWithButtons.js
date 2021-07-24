import React, { Component } from 'react';
import { ImageBackground,
    StyleSheet, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';
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





const Home = ({navigation}) => (
  <SafeAreaView style={{flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',}}>
     <ImageBackground 
            source={require('../assets/HomePage.png')} style={styles.image}>
        </ImageBackground>
        

        <View style={styles.button}>
            
            <Button 
                title="AlterEgo"
                color="black"
                onPress={() => navigation.navigate("AlterEgo")} />
             <Button 
                title="BeautyInThePot"
                color="black"
                onPress={() => navigation.navigate("BeautyInThePot")} />
            <Button 
                title="BurntEnds"
                color="black"
                onPress={() => navigation.navigate("BurntEnds")} />
            <Button 
                title="DinTaiFung"
                color="black"
                onPress={() => navigation.navigate("DinTaiFung")} />

            <Button 
                title="FookKin"
                color="black"
                onPress={() => navigation.navigate("FookKin")} />   
            <Button 
                title="GenkiSushi"
                color="black"
                onPress={() => navigation.navigate("GenkiSushi")} />
            <Button 
                title="HaiDiLao"
                color="black"
                onPress={() => navigation.navigate("HaiDiLao")} />
            
            <Button 
                title="KohGrill"
                color="black"
                onPress={() => navigation.navigate("KohGrill")} />
            <Button 
                title="Lawry"
                color="black"
                onPress={() => navigation.navigate("Lawry")} />
            <Button
                title="ThreeMealsADay"
                color="black"
                onPress={() => navigation.navigate("ThreeMealsADay")} />
            <Button
                title="TwoManBagelHouse"
                color="black"
                onPress={() => navigation.navigate("TwoManBagelHouse")} />
                </View>
            
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {        
    flex: 1,
    justifyContent: 'center',

  },
  image: {
    flex: 1,
  },
  item:{

    padding:10,
    textAlign: 'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:'#6495ed', 
    marginBottom:10},
});

export default Home
