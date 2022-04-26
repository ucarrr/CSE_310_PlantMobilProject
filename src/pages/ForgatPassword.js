import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'

const ForgatPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.area}>
                <Text style={styles.resetPasswordText}>Reset Password</Text>


                <Image
                    style={styles.emailLogo}
                    source={require('../assets/email7.jpg')}
                />
                <View style={styles.backWhite}>

                    <TextInput
                        autoCapitalize='none'
                        placeholder="Email"
                        inlineImageLeft='search_icon'
                        keyboardType="email-address"
                        style={styles.input}

                    />

                    <View style={styles.buttonSubmit}>
                        <Button title="Reset Password" onPress={() =>
                            navigation.navigate('LoginScreen')
                        } />
                    </View>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99ccff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    resetPasswordText: {
        fontSize: 35,
        color: '#45aaf2',
        textAlign:'center',
        margin:10,
    },
    emailLogo: {

        width: 150,
        height: 150,
        marginHorizontal: 60,
        marginBottom: 20,


    },
    input: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: 200,
        borderRadius: 10,
        height: 40,

        margin: 10,

    },
    buttonSubmit: {
        marginTop: 15,
        backgroundColor: "white",
    },
    backWhite: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
    },
    area: {
        marginVertical: 150,
        textAlign:'center',

    },
});
export default ForgatPassword
1