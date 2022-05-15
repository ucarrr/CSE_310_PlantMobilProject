import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'



function SignUpForm({ navigation }) {
    return (
        <View>
            <Text style={styles.signInText2}>Sign Up</Text>


            <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Name"
                autoCapitalize='none'
                returnKeyType={"go"}
                 
            />
               <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Surname"
                autoCapitalize='none'
                returnKeyType={"go"}
                 
            />
            <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Email"
                keyboardType="email-address"


            />
            <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Phone"
                keyboardType="phone-pad"


            />
            <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Password"
                secureTextEntry={true}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    signInText2: {
        marginVertical: 10,
        fontSize: 20,
        color: '#333',
        fontWeight:'700',
        fontStyle:'italic',

    },

});

export default SignUpForm
