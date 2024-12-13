import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginFormContainer: {
        marginTop: '50%',
    },  
    headerText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    usernameInput: {
        borderWidth: 2,
        borderRadius: 10, 
        padding: 10,
        margin: 'auto',
        width: '80%',
    },
    passwordInput: {
        borderWidth: 2,
        borderRadius: 10, 
        padding: 10,
        margin: 'auto',
        width: '80%',
    },
    loginButton: {
        borderWidth: 2,
        borderBlockColor: 'green',
        width: '60%',
        margin: 'auto',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        letterSpacing: 1,
    }
});

export default styles;
