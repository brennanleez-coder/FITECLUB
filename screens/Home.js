import React, { Component } from 'react';
import { ImageBackground,
    StyleSheet, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';


const Home = ({navigation}) => (
  <SafeAreaView style={styles.container}>
     <ImageBackground 
            source={require('../assets/HomePage.png')} style={styles.image}>
        </ImageBackground>
        
    <View>
    <Button onPress={()=> navigation.navigate("Login")} title= 'Tap to continue'></Button>
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
});

export default Home
