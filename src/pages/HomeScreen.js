import { StyleSheet, Text, View ,SafeAreaView,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';





const HomeScreen = () => {
    const [data, setData] = useState('');

    const getData = () => {
        return fetch('http://192.168.43.171:5000/addData')
            .then((response) => response.json())
            .then((json) => {
                setData(json.slice(-10));
                console.log(json[json.length - 1].moisture);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        const interval = setInterval(() => {
            getData();
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
            <FlatList
                data={data}

                key={(item) => item.id.toString()}
                numColumn={4}
                ListEmptyComponent={() => <View><Text>Veri Yok</Text></View>}
                renderItem={({ item }) => <View style={styles.container}>
                    <View style={styles.styletitle}>
                        <Text>id:{item.id}</Text>
                        <Text >title: {item.temperature}</Text>
                        <Text>title: {item.humidity}</Text>
                        <Text>body: {item.moisture}</Text>
                        <Text>body: {item.date}</Text>
                    </View>

                </View>}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#ddd',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 15,
        borderColor: '#ddd'

    },
    styletitle: {
        padding: 5,
        backgroundColor: '#ddd',
        marginBottom: 5,
        borderRadius: 10,
    },

})