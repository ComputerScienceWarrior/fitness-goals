import * as SecureStore from 'expo-secure-store';

const logout = async (navigation) => {
    try {
        await SecureStore.deleteItemAsync('jwt');
        navigation.navigate('Login');
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export default logout;
