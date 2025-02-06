import React, { useState } from "react";
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

const User = ( props ) => {
    const [selectedWorkout, setSelectedWorkout] = useState('');

    const handleSelect = (selectedItem) => {
        setSelectedWorkout(selectedItem);
        props.navigation.navigate('WorkoutPage', selectedItem);
    };

    const workoutOptions = props.workouts.map(workout => ({
        label: workout.name,
        value: workout.id
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.greetingText}>Hello, {props.username}!</Text>
            
            <RNPickerSelect
                onValueChange={handleSelect}
                items={workoutOptions}
                placeholder={{ label: "Select a Workout", value: '' }}
                style={{
                    inputAndroid: styles.dropdown,
                    inputIOS: styles.dropdown,
                }}
            />
        </View>
    );
};

export default User;
