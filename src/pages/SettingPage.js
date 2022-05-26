import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const SettingPage = () => {
    const [heat, setHeat] = useState('')


    const pumpOpen = () => {
        return fetch('http://192.168.43.171:5000/pumpOpen');
    };    
    return (
        <View style={styles.container}>
            <Text>SettingPage</Text>
            <View>
                <TextInput
                    style={{ fontSize: 18, color: '#27ae60' }}
                    placeholder="Heat"
                    value={heat}
                    keyboardType="numeric"
                    onChangeText={(text) => setHeat(text)}

                />
            
            </View>
            <TouchableOpacity
                onPress={pumpOpen}
            >
                <Text style={styles.heatButton}>open pump</Text>
            </TouchableOpacity>
            <View>

            </View>
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
    heatButton: {
        color: '#fff',
        borderColor: 'black',
        borderWidth: .2,
        padding: 15,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#27ae60',
    }


});

export default SettingPage
