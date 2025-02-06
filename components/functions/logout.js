import * as SecureStore from "expo-secure-store";

const logout = async (navigation) => {
    try {
        await SecureStore.deleteItemAsync("jwt");
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    } catch (error) {
        console.log("Error during logout: ", error.message);
    }
};

export default logout;
