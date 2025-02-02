import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import fetchUserData from '../functions/fetchUserData';
import * as SecureStore from 'expo-secure-store';
import User from "../User/User";
import styles from "./Styles";
import Spacer from "../extras/Spacer/Spacer";
import logout from "../functions/logout";
import fetchWorkoutData from "../functions/fetchWorkoutData";

const UserPage = ({ navigation }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadCurrentUser = async () => {
            try {
                const token = await SecureStore.getItemAsync("jwt");
                if (token) {
                    const data = await fetchUserData();
                    const projectData = await fetchWorkoutData(data.id);
                    setUserData(data);
                    console.log("Project Data retrieved from current: ", projectData)
                } else {
                    throw new Error("No token found");
                }
            } catch (error) {
                console.log(error);
            };
        };

        loadCurrentUser();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {userData ? (
            <>
                <Text style={styles.header}>{userData.username}'s Fitness Stats</Text>
                <User username={userData.username} userData={userData} />
                <TouchableOpacity
                onPress={() => navigation.navigate("NewWorkoutForm")}
                style={styles.addWorkoutButton}
                >
                <Text style={styles.addWorkoutText}>Create a Workout</Text>
                </TouchableOpacity>
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
