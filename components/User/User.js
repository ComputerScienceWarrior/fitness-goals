import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const User = ( props ) => {
    return(
        <View>
            <Text>Hello, {props.username}!</Text>
        </View>
    );
};

export default User;
