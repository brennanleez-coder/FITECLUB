import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';


const SigninScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
     
    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('NestedHome');
        } catch (err) {
            setError(err.message);
        }

    }
    return <>
        <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/AppIcon.png')} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
      
        <TextInput
          style={styles.TextInput}
          placeholder="* * * * * * * * * *"
          placeholderTextColor="#003f5c"
          secureTextEntry={hidePassword}
          onChangeText={(password) => setPassword(password)}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />
      </View>
 
      <Button title="SignIn" onPress={() => signIn()} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
    </View>
    </>
};

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });
  