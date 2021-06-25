import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text, TextInput, View} from 'react-native-elements';
import firebase from '../firebase/fire';

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
    if (confirmationPassword !== originalPassword) {
      alert('Passwords do not match, please try again.');
    }
}

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Signin');
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
        placeholder="Type your password here"
        value={password}
        onChangeText={setPassword}

        />
        <Input
        label="Confirm password"
        placeholder="Re-type your password here"
        onSubmitEditing={(e) => {
          confirmPasswordsMatch(e.nativeEvent.text, password);
        }}

        />
        {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        <Button title="SignUp" onPress={() => signUp()} />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text>Already have an account? Sign In</Text>
        </TouchableOpacity>
    </>
};

export default SignupScreen;