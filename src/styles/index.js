import { StyleSheet, Dimensions } from 'react-native';

const Layout = Dimensions.get('window');
export const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#050814'
    },
    content: {
        padding: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: Layout.width - 50,
        height: Layout.height - 150,
        overflow: 'hidden',
        // backgroundColor: 'rgba(255,255,255, 0.3)'
    },
    buttonGroup: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: Layout.width - 50,
        justifyContent: 'space-between',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#DAA901',
    },
    loveButton: {
        width: 60, height: 60, 
        backgroundColor: 'red',
        borderRadius: 30, 
        overflow: 'hidden', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginVertical: 20,
    },
    text: {
        color: 'white',
        fontFamily: 'Avenir'
    },
    quotesText: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'left',
        fontWeight: '500'
    },
    buttonText: {
        fontWeight: 'bold'
    }
});
