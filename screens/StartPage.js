import React, { Component } from 'react';
import { ImageBackground,
    StyleSheet, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';


const Home = ({navigation}) => (
  <SafeAreaView style={styles.container}>
     <ImageBackground 
            source={require('../assets/HomePage.png')} style={styles.image}>
        </ImageBackground>
        
        <View style={styles.button}>
            <View style={styles.buttonStyle}>
            <Button 
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")} />
                </View>
            
            <View style={{ flexDirection:"row" }}>
            <Button
                title="Sign In"
                onPress={() => navigation.navigate("SignIn")} />
                </View>
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
    resizeMode: "cover",
    justifyContent: "center"
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
    justifyContent: "center",
   
  }
});

export default Home
