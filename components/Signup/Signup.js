import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from './Styles';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const Signup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const saveToken = async (token) => {
        try {
            await SecureStore.setItemAsync('jwt', token);
        } catch (err) {
            console.error("Error saving token", err);
        }
    };

    const userSignUp = async () => {
        if (username.length < 3) {
            Alert.alert("Error", "Username is too short");
        } else if (password !== passwordConfirmation) {
            Alert.alert("Error", "Passwords do not match");
        } else {
            const userData = { 
                username: username,
                password: password,
                email: email,
            };

            try {
                setLoading(true);
                const response = await axios.post('http://192.168.12.175:3000/users/signup', userData);
                if (response.status === 201) {
                    await saveToken(response.data.token);
                    Alert.alert("Signup successful!");
                    navigation.navigate('UserPage', { username: username, userId: response.data.user.id });
                }
            } catch (err) {
                setLoading(false);
                setError('Error creating user: ' + (err.response?.data?.errors || err.message));
            }
        }
    };

    return (
        <View style={styles.newUserFormWrapper}>
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
            { password !== passwordConfirmation && passwordConfirmation !== '' && (
                <Text style={styles.alertText}>Passwords do not match!</Text>
            )}
            <TextInput 
                style={styles.textInputs}
                value={email}
                placeholder="Enter Email Address"
                onChangeText={setEmail}
            />
            {error && <Text style={styles.alertText}>{error}</Text>}
            <TouchableOpacity 
                onPress={userSignUp}
                style={styles.createAccountButton}
            >
                { loading ? (
                    <Text style={styles.createAccountButtonText}>Loading...</Text>
                ) : (
                    <Text style={styles.createAccountButtonText}>Create Account</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default Signup;
