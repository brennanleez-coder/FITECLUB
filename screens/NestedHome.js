import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ImageBackground,
  StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ScrollView } from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.search}>
      <ScrollView>
      <View>
      <Button title= 'Search' onPress={()=> navigation.navigate('Search')}></Button>
      <Button title = 'Profile' onPress={()=> navigation.navigate('Profile')}></Button>
      <Button title = 'View Rankings' onPress={()=> navigation.navigate('Ranking')}></Button>
      </View>


      </ScrollView>

    
    </SafeAreaView>

  );
};

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
