import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Styles";
import Spacer from "../extras/Spacer/Spacer";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.greeting}>Reach your dream body, with Fitness Goals!</Text>
                <Spacer />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')} 
                    style={styles.startButton}
                >
                    <Text style={styles.startButtonText}>Start Here</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.loginButton}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;
