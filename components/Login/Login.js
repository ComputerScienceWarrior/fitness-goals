import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import styles from "./Styles";
import Spacer from '../extras/Spacer/Spacer';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const saveToken = async (token) => {
        try {
            await SecureStore.setItemAsync('jwt', token);
        } catch (error) {
            console.error("Error saving token", error);
        }
    };

    const userLogin = async () => {
        const userData = {
            username: username,
            password: password,
        };
        
        try {
            const response = await axios.post(`http://192.168.12.175:3000/login`, userData);
            if (response.status === 200) {
                await saveToken(response.data["token"]);
                Alert.alert("Login successful!");
                navigation.navigate('UserPage', { username: username, userId: response.data["userId"] });
            }
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                Alert.alert("Login failed", error.response.data.message || "Please check your credentials and try again.");
            } else {
                Alert.alert("Error", "Something went wrong. Please try again later.");
            }
        }
    }

    return(
        <View style={styles.loginFormContainer}>
            <Text style={styles.headerText}>Welcome Back!</Text>
            <TextInput
            style={styles.usernameInput}
                placeholder="Enter Username"
                onChangeText={setUsername}
            />
            <Spacer padding={10} margin={10} />
            <TextInput
                style={styles.passwordInput}
                secureTextEntry={true}
                placeholder="Enter Password"
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => userLogin()}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
