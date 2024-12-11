import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './Styles';

const Signup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');

    const userSignUp = () => {
        if (username.length < 3) {
            console.log('Username is too short')
        } else if (password != passwordConfirmation){
            console.log('Passwords do not match')
        } else{
            console.log(`validating User ${username}...Success!`)
            navigation.navigate('Home')
        }
    }

    return(
        <View>
            <Text style={styles.header}>Sign Up</Text>
            <TextInput 
                style={styles.textInputs}
                placeholder="Create a username (between 4 - 15 characters)"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.textInputs}
                secureTextEntry 
                value={password}
                placeholder="Enter a unique password"
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.textInputs}
                secureTextEntry 
                value={passwordConfirmation}
                placeholder="Confirm password"
                onChangeText={setPasswordConfirmation}
            />
            { password != passwordConfirmation && passwordConfirmation != '' ? <Text style={styles.alertText}>Passwords do not match!</Text> : null }
            <TextInput 
                style={styles.textInputs}
                value={email}
                placeholder="Enter Email Address"
                onChangeText={setEmail}
            />
            <TouchableOpacity onPress={() => userSignUp()}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Signup;
