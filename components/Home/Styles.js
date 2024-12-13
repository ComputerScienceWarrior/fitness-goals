import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        textAlign: 'center',
        fontSize: 24,
    },
    startButton: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        width: 300,
        padding: 20,
        margin: 'auto',
    },
    startButtonText: {
        color: 'green',
        textAlign: 'center',
        letterSpacing: 1,
    },
    loginButton: {
        padding: 20,
        borderWidth: 2,
        borderColor: 'blue',
        width: 300,
        borderRadius: 10,
        margin: 'auto',
    },
    loginButtonText: {
        color: 'blue',
        textAlign: 'center',
        letterSpacing: 1
    }
});

export default styles;
