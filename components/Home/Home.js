import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Styles";
import Spacer from "../extras/Spacer/Spacer";

const Home = ({ navigtion }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.greeting}>Reach your dream body, with Fitness Goals!</Text>
                <Spacer />
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText} onPress={() => navigtion.navigate('/signup')}>Start Here</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;
