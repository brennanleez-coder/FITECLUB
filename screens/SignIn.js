import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';


const SigninScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('NestedHome');
        } catch (err) {
            setError(err.message);
        }

    }
    return <>
        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
        />
        <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        <Button title="Sign In" onPress={() => signIn()} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
    </>
};

export default SigninScreen;