import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import SignUpForm from './SignUpForm';



function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headBackgound}></View>
      <View style={styles.headBackgound2}></View>
      <KeyboardAvoidingView behavior={'position'}>

        <ScrollView>
          <View style={styles.loginArea}>
            <SignUpForm />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LoginScreen')
              }

            >
              <Text style={styles.signUpText}>Sing Up</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 80,


  }, loginArea: {


    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    opacity: 0.9,
    padding: 20,

    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 4,


  },
  headBackgound: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 300,
    width: '100%',
    backgroundColor: '#2ecc71',
    borderBottomEndRadius: 1000,
  },
  headBackgound2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 300,
    width: '100%',
    borderTopStartRadius: 1000,
    backgroundColor: '#27ae60',
  },
  signUpText: {
    marginTop: 10,
    color: '#fff',
    borderColor: 'black',
    borderWidth: .2,
    padding: 15,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    backgroundColor: '#27ae60',

  },

});
