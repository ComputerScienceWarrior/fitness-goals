import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

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
                const { token } = response.data;
                console.log('Token received:', token);
                
                await saveToken(token);
                Alert.alert("Login successful!");
                navigation.navigate('UserPage', { username: username });
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
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder="Enter Username"
                onChangeText={setUsername}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Enter Password"
                onChangeText={setPassword}
            />
            <TouchableOpacity
                onPress={() => userLogin()}
            >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
