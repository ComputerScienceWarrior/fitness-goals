import React from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

const fetchWorkoutData = async ( userId ) => {
    try{
        const token = SecureStore.getItemAsync('jwt');
        if (token) {
            const response = await axios.get(`http://192.168.12.175:3000/users/${userId}/workouts/`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        }else {
            Alert("No Token present");
        }
    }catch(error){
        throw error;
    }    
}

export default fetchWorkoutData;
