import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from "axios";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = async () => {
        const userData = {
            username: username,
            password: password,
        };
        
        try {
            const response = await axios.post(`http://192.168.12.175:3000/login`, userData);

            if (response.status === 200) {
                Alert.alert("Login successful!");
                navigation.navigate('UserPage', { username: username });
            }
        } catch (error) {
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
