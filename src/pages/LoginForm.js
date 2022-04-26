import React, { Component } from "react";

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,

} from 'react-native';





function LoginForm({ navigation }) {

    return (
        <View>

            <Text style={styles.signInText}>Sign In</Text>
            <TextInput
                style={{ fontSize: 18 }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize='none'
                returnKeyType={"go"}
                onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
                style={{ fontSize: 18 }}
                placeholder="Password"
                secureTextEntry={true}
            // inputRef={input => this.passwordInput = input}
            />
            {/*<MyButton

                    color={"#f1f1f1"}
                    backgroundColor={"#0065E0"}
                    text={"Sign In Now"}
                />*/}


        </View>
    );

}

const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 20,
        color: '#333',

    },
    signInButton: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        fontSize: 14,
        color: "#f1f1f1",
        backgroundColor: "#0065E0",
        textAlign: 'center',
    },
});

export default LoginForm;