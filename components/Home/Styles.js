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
    }
});

export default styles;
