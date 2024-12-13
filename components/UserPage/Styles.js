import { StyleSheet } from "react-native";
import logout from "../functions/logout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    loading: {
        fontSize: 16,
        color: "gray",
    },
    logoutButton: {
        marginTop: '100%'

    },
    logoutButtonText:{
        color: 'red',
        fontSize: 16,
        letterSpacing: 1,
    },
});

export default styles;
