import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './Styles';
import axios from "axios";

const Signup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const userSignUp = async () => {
        if (username.length < 3) {
            console.log('Username is too short')
        } else if (password != passwordConfirmation){
            console.log('Passwords do not match')
        } else{
            const userData = { 
                username: username,
                password: password,
                email: email,
            }

            try {
                setLoading(true);
                const response = await axios.post('http://192.168.12.175:3000/users/signup', userData);
                console.log('User created successfully', response.data);
                setLoading(false);
                navigation.navigate('Home');
            } catch (err) {
                setLoading(false);
                setError('Error creating user: ' + err.response?.data?.message || err.message);
                console.error('Error creating user:', err);
            }
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
            {error && <Text style={styles.alertText}>{error}</Text>}
            <TouchableOpacity 
                onPress={() => userSignUp()}
                style={styles.createAccountButton}
            >
                { loading ? <Text style={styles.createAccountButtonText}>Loading...</Text> : <Text style={styles.createAccountButtonText}>Create Account</Text> }
            </TouchableOpacity>
        </View>
    );
}

export default Signup;
