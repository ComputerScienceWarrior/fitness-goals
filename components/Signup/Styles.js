import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },
    textInputs: {
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 5,
        margin: 5,
        borderRadius: 10,
    },
    alertText: {
        color: 'red'
    },
    createAccountButton: {
        padding: 10,
        backgroundColor: 'green',
        width: '80%',
        margin: 'auto',
        borderRadius: 10,
    },
    createAccountButtonText: {
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1
    }
})

export default styles;
