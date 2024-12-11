import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import User from "../User/User";

const UserPage = ({ route }) => {
    const { username } = route.params;  

    return(
        <View>
            <Text>{username}'s fitness stats</Text>
            <User username={username} />
        </View>
    );
};

export default UserPage;
