import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 45,
    },
    logo: {
        width: '100%',
        height: 50,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    bottomSection: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    button1: {
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 5,
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    button2: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    button2Text: {
        color: 'white',
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
    appleLogo: {
        width: 22,
        height: 22,
        marginRight: 10,
        resizeMode: 'contain',
    },
    emailLogo: {
        width: 20,
        height: 25,
        marginRight: 10,
        resizeMode: 'contain',
    },
    bottomSection: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
     },
     agreementContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'center',
        textAlign: 'center'
     },
     agreementText: {
        color: 'grey',
        fontSize: 10,
        textAlign: 'center'
     },
     agreementTextPressable: {
        color: 'black',
        fontSize: 10,
        textAlign: 'center',
        textDecorationLine: 'underline'
     }
});

export default styles;
