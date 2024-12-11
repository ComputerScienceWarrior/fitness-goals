import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'beige',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        textAlign: 'center'
    },
    startButton: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        width: 300,
        padding: 20
    },
    startButtonText: {
        textAlign: 'center'
    },
    loginButton: {
        padding: 20,
        backgroundColor: 'green',
        width: 300,
        marginTop: 10,
        borderRadius: 10,
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1
    }
});

export default styles;
