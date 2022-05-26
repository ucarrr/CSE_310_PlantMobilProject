import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
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
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SafeAreaView>

            <Text>HomeScreen


            </Text>



            <FlatList
                data={data}

                key={(item) => item.id.toString()}
                numColumn={4}
                ListEmptyComponent={() => <View><Text>Veri Yok</Text></View>}
                renderItem={({ item }) => <View style={styles.container}>
                    <View style={styles.styletitle}>
                        <View>
                            <Text>id:{item.id}</Text>
                        </View>
                        <View>
                            <Text >temperature : {item.temperature}</Text>

                        </View>
                        <View>
                            <Text>title : {item.humidity}</Text>
                        </View>
                        <View>
                            <Text>humidity : {item.moisture}</Text>
                        </View>
                        <View>
                            <Text>date : {item.date}</Text>
                        </View>





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
        flex: 1,
        backgroundColor: '#ddd',
        marginBottom: 5,
        borderRadius: 10,
    },
    style1: {
        fontWeight: '700'
    },
    style2: {
        fontWeight: '100'
    },
    imagestyle: {
        width: 80,
        height: 200,
        resizeMode: 'contain',
        alignItems: "center",
    }

})