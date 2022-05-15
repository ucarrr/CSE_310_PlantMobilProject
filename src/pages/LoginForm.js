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

            <Text style={styles.signInText2}>Sign In</Text>
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
    signInText2: {
        marginVertical: 10,
        fontSize: 20,
        color: '#333',

    },
   
    
});

export default LoginForm;