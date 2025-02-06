import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    loading: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
    },
    logoutButton: {
        marginTop: 20,
        marginBottom: 20,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: 200,
        backgroundColor: 'white',
    },
    logoutButtonText: {
        color: 'red',
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center',
    },
    addWorkoutButton: {
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        width: 200,
        backgroundColor: 'lightblue',
        alignSelf: 'center',
    },
    addWorkoutText: {
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold',
    }
});

export default styles;
