import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";

const Signup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const userSignUp = () => {

        console.log("validating User...")
        navigation.navigate('Home')
    }

    return(
        <View>
            <Text>Sign Up</Text>
            <TextInput placeholder="Create a username (between 4 - 15 characters)"/>
            <TouchableOpacity onPress={() => userSignUp()}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Signup;
