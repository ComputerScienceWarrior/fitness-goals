// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    dropdown: {
        width: '80%',
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        padding: 10,
    },
    selectedText: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});

export default styles;
