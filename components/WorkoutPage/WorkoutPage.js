import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, SafeAreaView } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Alert } from "react-native";
import axios from "axios";

const WorkoutPage = ( {navigation, route }, props ) => {
    const [workoutId, setWorkoutId] = useState(null);
    const [workoutName, setWorkoutName] = useState("");

    useEffect(() => {
        const getWorkout = async () => {
            try{
                const token = SecureStore.getItemAsync('jwt');
                if (token) {
                    let woiD = route.params.id || route.params;
                    const response = await axios.get(`http://192.168.12.175:3000/workouts/${woiD}/`)
                    setWorkoutId(response.data.id);
                    setWorkoutName(response.data.name);
                } else{
                    Alert('No token Present');
                    navigation.navigate('Login');
                }
            } catch (error) {
                Alert(error)
            }
        }
        getWorkout();
    }, [])

    return (
        <SafeAreaView>
            <Text>Workout ID: {workoutId}</Text>
            <Text>Workout Name: {workoutName}</Text>
        </SafeAreaView>
    );
}

export default WorkoutPage;
