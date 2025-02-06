import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    newUserFormWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        height: 600
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        marginBottom: 60,
        fontSize: 32
    },
    textInputs: {
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 15,
        borderRadius: 10,
        marginBottom: 40,
    },
    alertText: {
        color: 'red'
    },
    createAccountButton: {
        padding: 15,
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
