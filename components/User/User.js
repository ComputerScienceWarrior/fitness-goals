import React, { useState } from "react";
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles'; // Import your styles here

const User = (props) => {
    const [selectedWorkout, setSelectedWorkout] = useState('');

    const handleSelect = (selectedItem) => {
        setSelectedWorkout(selectedItem);
        console.log("Selected workout:", selectedItem);
    };

    const workoutOptions = props.workouts.map(workout => ({
        label: workout.name,
        value: workout.id
    }));

    return (
        <View style={styles.container}>  {/* Use the container style */}
            <Text style={styles.greetingText}>Hello, {props.username}!</Text>
            
            <RNPickerSelect
                onValueChange={handleSelect}
                items={workoutOptions}
                placeholder={{ label: "Select a Workout", value: '' }}
                style={{
                    inputAndroid: styles.dropdown,  // Styles for Android
                    inputIOS: styles.dropdown,     // Styles for iOS
                }}
            />
            
            {selectedWorkout && (
                <Text style={styles.selectedText}>You selected: {selectedWorkout}</Text>
            )}
        </View>
    );
};

export default User;
