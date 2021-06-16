import * as React from 'react';

import App from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyBYPdauLTocpyOBZN5e-7_o4_XvQdn8Wk8',
    authDomain: 'fiteclub-1ee9b.firebaseapp.com',
    databaseURL: "https://fiteclub-1ee9b.firebaseio.com",
    projectId: 'fiteclub-1ee9b',
    storageBucket: "fiteclub-1ee9b.appspot.com",
    appId: 'app-1-236655858658-ios-bbb9407975465abbdd1fbb',
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase,Auth}

function Setup() {
    return <App />;
}