import React from 'react';
import { ImageBackground,
  StyleSheet, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

    <View>
    <Button title= 'Tap to continue'></Button>
    </View>
    </SafeAreaView>

  );
};

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

export default Home;
