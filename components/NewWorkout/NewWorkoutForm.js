import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./Styles";
import axios from "axios";
import fetchUserData from "../functions/fetchUserData";
import * as SecureStore from 'expo-secure-store';

const NewWorkoutForm = ({ navigation } ) => {
    const [workoutName, setWorkoutName] = useState('');
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const loadCurrentUser = async () => {
            try {
                const token = await SecureStore.getItemAsync("jwt");
                if (token) {
                    const data = await fetchUserData();
                    setUserData(data);
                } else {
                    throw new Error("No token found");
                }
            } catch (error) {
                console.log(error);
                navigation.navigate("Login");
            };
        };

        loadCurrentUser();
    }, []);
    
    const saveWorkoutData = async () => {
        const workoutData = { 
            name: workoutName,
            user_id: userData.id,
        };

        try {
            setLoading(true)
            const response = await axios.post(`http://192.168.12.175:3000/users/${userData.id}/workouts/new`, workoutData)
            navigation.navigate('WorkoutPage', response.data)

        }catch(error){
            setLoading(false);
            console.log("ERROR: ", error)
        }
    }

    return(
        <SafeAreaView>
            <View style={styles.newWorkoutFormWrapper}>
                <TextInput 
                    placeholder="Name your workout"
                    value={workoutName}
                    onChangeText={setWorkoutName}
                />
                <TouchableOpacity onPress={saveWorkoutData}>
                    <Text>Create Workout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NewWorkoutForm;
