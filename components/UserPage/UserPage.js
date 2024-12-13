import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import fetchUserData from "../functions/fetchUserData";
import User from "../User/User";
import styles from "./Styles";

const UserPage = ({ route, navigation }) => {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const data = await fetchUserData(`users/${route.params["userId"]}`);
                setUserData(data);
            } catch (error) {
                console.log(error)
            }
        };

        loadUserData();
    }, []);

    return (
        <View style={styles.container}>
            {userData ? (
                <>
                    <Text style={styles.header}>{route.params["username"]}'s Fitness Stats</Text>
                    <User username={route.params["username"]} userData={userData} /> 
                </>
            ) : (
                <Text style={styles.loading}>Loading...</Text>
            )}
        </View>
    );
};

export default UserPage;
