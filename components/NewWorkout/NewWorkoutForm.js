import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

const NewWorkoutForm = ({ navigation }) => {
    const saveWorkoutData = () => {
        alert('Saving...');
    }
    return(
        <SafeAreaView>
            <View style={styles.newWorkoutFormWrapper}>
                <TouchableOpacity onPress={saveWorkoutData}>
                    <Text>Save Workout Data</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NewWorkoutForm;
