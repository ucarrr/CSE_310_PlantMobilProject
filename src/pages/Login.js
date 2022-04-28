import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import LoginForm from './LoginForm';





function Login({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.headBackgound}></View>

      <KeyboardAvoidingView behavior={'position'}>

        <View style={styles.logoDeneme}>
          <Text style={styles.logo}>Plant Tracking</Text>
          <Text style={styles.logoDescription}>keep your plants healthy</Text>
        </View>

        <View style={styles.loginArea}>
          <LoginForm />
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HomeScreen')
              }

            >
              <Text style={styles.signInButton}>Sign In Now</Text>
            </TouchableOpacity>

            <View style={{marginTop: 15}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ForgatPasswordPage')
                }

              >
                <Text style={styles.forgatPasswordText}>I forgat password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>



        <View style={styles.signUpArea}>

          <Text style={styles.signUpDecription}>Don't have a account!</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignUp')
            }

          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>




        </View>

      </KeyboardAvoidingView>

    </View>
  );

}




const styles = StyleSheet.create({
  signInButton: {
    paddingVertical: '5%',

    borderRadius: 3,
    alignItems: 'center',
    fontSize: 18,
    color: "#f1f1f1",
    backgroundColor: "#27ae60",
    textAlign: 'center',

  },
  container: {

    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 80,


  },
  headBackgound: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '62%',
    width: '100%',
    backgroundColor: '#2ecc71',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2'
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
    fontStyle: 'italic',
    fontSize: 18,

  },
  loginArea: {


    marginHorizontal: 40,
    marginTop: 35,
    backgroundColor: '#fff',
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
  signUpArea: {
    marginTop: 10,
    alignItems: 'center',
  },
  signUpDecription: {

    color: '#999',
  },

  signUpText: {
    marginTop: 10,
    color: '#666',
    borderColor: 'black',
    borderWidth: .2,
    padding: 15,
    borderRadius: 8,

  },
  logoDeneme: {
    marginTop: 35,
  },
  forgatPasswordText: {

    color: '#999',
    
    borderBottomColor: 'gray',
    borderBottomWidth: .2,
    borderRadius: 8,
    padding: 6,
    fontSize: 10,
    textAlign: 'right',



  },

});


export default Login;