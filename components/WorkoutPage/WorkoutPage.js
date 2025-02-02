import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, SafeAreaView } from "react-native";

const WorkoutPage = ( {navigation, route }, props ) => {
    const [workoutId, setWorkoutId] = useState(null);
    const [workoutName, setWorkoutName] = useState("");

    useEffect(() => {
        setWorkoutId(route.params.id);
        setWorkoutName(route.params.name);
    }, []);

    return (
        <SafeAreaView>
            <Text>Workout ID: {workoutId}</Text>
            <Text>Workout Name: {workoutName}</Text>
        </SafeAreaView>
    );
}

export default WorkoutPage;
