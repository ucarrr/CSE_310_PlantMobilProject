import React, { useState, useEffect } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import SignUpForm from './SignUpForm';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';


function SignUp({ navigation }) {
  // Set an initializing state whilst Firebase connects
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmpassword, setComfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  let dataToSave={
    name:name,
    surname:surname,
    email:email,
    phone:phone,
    password:password,

  };


  const handleSignUp = () => {

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        database().ref('users').push(dataToSave).then(usersinfo => {
          console.log('user information saved in Realtime Database.');
    
        }).catch(error => {console.error(error);})
        console.log('User account created & signed in!');
        const user = userCredentials.user;
        console.log(user.email);
        alert('Account created');
      
        {/**  navigation.navigate('Login');   //navigation   */} 
        
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      }
      );
      
  }
  return (
    <View style={styles.container}>
      <View style={styles.headBackgound}></View>
      <View style={styles.headBackgound2}></View>
      <KeyboardAvoidingView behavior={'position'}>

        <ScrollView>
          <View style={styles.loginArea}>
            <View>
              <Text style={styles.signInText2}>Sign Up</Text>


              <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Name"
                autoCapitalize='none'
                returnKeyType={"go"}
                value={name}
                onChangeText={text => setName(text)}

              />
              <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Surname"
                autoCapitalize='none'
                returnKeyType={"go"}
                value={surname}
                onChangeText={text => setSurname(text)}

              />
              <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}


              />
              <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={text => setPhone(text)}


              />
              <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}

              />
              <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={comfirmpassword}
                onChangeText={text => setComfirmPassword(text)}

              />


            </View>
            <TouchableOpacity
              onPress={handleSignUp}

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
    marginVertical: 5,
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
  signInText2: {
    marginVertical: 10,
    fontSize: 20,
    color: '#333',
    fontWeight: '700',
    fontStyle: 'italic',

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
    fontWeight: 'bold',
    backgroundColor: '#27ae60',

  },

});
