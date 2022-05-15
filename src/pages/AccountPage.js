import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { ImageBackground } from 'react-native'
import auth from '@react-native-firebase/auth';


const AccountPage = ({ navigation }) => {

    const handleSignOut = () => {
        auth()
            .signOut()
            .then(user => {
                
                console.log('User signed out!');
                alert('Account Signed out');
                navigation.navigate('LoginScreen');
                
                
              }        

            );

    }
    return (
        <View style={styles.container}>


            <ImageBackground
                source={require('../assets/eiffel.jpg')}
                style={styles.backgroundImage}
            >
                {/* <Image source={require('../assets/abstractblue.png')} style={styles.backgroundImage} /> */}
                <View>
                    <Text>AccountPage</Text>
                </View>

                <View style={styles.buttonLogOut}>
                    <Button
                        title="Log Out"
                        onPress={ handleSignOut }


                    />

                </View>


            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#F5FCFF',


    },
    buttonLogOut: {
        marginTop: 50,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }


});
export default AccountPage
