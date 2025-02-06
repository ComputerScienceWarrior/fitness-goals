import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

const fetchUserData = async (endpoint = "current_user") => {
    
    try {
        const token = await SecureStore.getItemAsync('jwt');
        if (token) {
            const response = await axios.get(`http://192.168.12.175:3000/${endpoint}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } else {
            Alert.alert("Error", "No token found. Please log in again.");
            throw new Error("No token found");
        }
    } catch (error) {
        console.error("Error fetching user data", error);
        Alert.alert("Error", "Unable to fetch user data. Please try again.");
        throw error;
    }
};

export default fetchUserData;
