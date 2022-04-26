import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const SettingPage = () => {
    return (
        <View style={styles.container}>
            <Text>SettingPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        
        flex: 1,
        backgroundColor: '#F5FCFF',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },


});

export default SettingPage
