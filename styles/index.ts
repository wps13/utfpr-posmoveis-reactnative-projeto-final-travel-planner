import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 50,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    questionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        marginTop: 24,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#8279D0',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    guideContainer: {
        marginVertical: 16,
        borderColor: '#8d8d8d',
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
    },
    errorContainer: {
        marginVertical: 16,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
    },
    buttonCopyGuide: {
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#5D5798',
        borderRadius: 4,
    }
})