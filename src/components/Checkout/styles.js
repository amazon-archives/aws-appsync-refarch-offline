import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    totalTxt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15,
        marginBottom: 5,
    },
    totalQty: {
        alignSelf: 'center',
        fontSize: 30,
        marginBottom: 15,
    },
    subtotalsTxt: {
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    checkoutBtn: {
        margin: 5,
        marginTop: 10,
        marginBottom: 10,
        height: 60,
        backgroundColor: 'tomato',
    },
    checkoutTxt: {
        fontSize: 20,
    }
});