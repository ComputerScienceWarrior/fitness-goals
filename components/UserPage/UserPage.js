import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, Alert, TouchableOpacity } from "react-native";
import fetchUserData from "../functions/fetchUserData";
import User from "../User/User";
import styles from "./Styles";
import Spacer from "../extras/Spacer/Spacer";
import logout from "../functions/logout";

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
        <SafeAreaView style={styles.container}>
            {userData ? (
                <>
                    <Text style={styles.header}>{route.params["username"]}'s Fitness Stats</Text>
                    <User username={route.params["username"]} userData={userData} /> 
                </>
            ) : (
                <Text style={styles.loading}>Loading...</Text>
            )}
            <Spacer margin={60} />
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => logout(navigation)}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UserPage;
