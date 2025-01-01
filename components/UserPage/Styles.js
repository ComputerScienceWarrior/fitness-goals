import { StyleSheet } from "react-native";

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
    addWorkoutButton: { 
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        width: 200,
        backgroundColor: 'lightblue'
    },
    addWorkoutText: {
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold',
    }
});

export default styles;
