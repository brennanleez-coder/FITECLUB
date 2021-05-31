import React from 'react';
import { ImageBackground,
  StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ScrollView } from 'react-native';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
      <Button title= 'Youre in search page'></Button>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Search;
