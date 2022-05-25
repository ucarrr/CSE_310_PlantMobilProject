import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native'

const SettingPage = () => {
    const [heat, setHeat] = useState('')

    function handleTransfer() {
        fetch('http://192.168.43.171:5000/postData', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ heat })
        }).then(() => {
            console.log("heat: " + heat)
        })

        fetch('http://192.168.43.171:5000/postData').then(
            response => response.json()
        ).then(data => setBackendData(data))
    }

    return (
        <View style={styles.container}>
            <Text>SettingPage</Text>
            <TextInput
                style={{ fontSize: 18, color: '#27ae60' }}
                placeholder="Heat"
                value={heat}
                keyboardType="numeric"
                onChangeText={(text) => setHeat(text)}

            />
            <TouchableOpacity
                onPress={handleTransfer}

            >
                <Text style={styles.heatButton}>Send Heat</Text>
            </TouchableOpacity>
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
