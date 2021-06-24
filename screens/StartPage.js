import React, { Component } from 'react';
import { ImageBackground,
    StyleSheet, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';


const Home = ({navigation}) => (
  <SafeAreaView style={styles.container}>
     <ImageBackground 
            source={require('../assets/HomePage.png')} style={styles.image}>
        </ImageBackground>
        

        <View style={styles.button}>
            
            <Button 
                title="Sign Up"
                color="white"
                onPress={() => navigation.navigate("SignUp")} />
               
            <View style={{ flexDirection:"row" }}>
            <Button
                title="Sign In"
                color="white"
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
    backgroundColor: "black",
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
    borderWidth: 1,
  
  },
  buttonStyle: { 
    justifyContent: "center",
   
  }
});

export default Home
