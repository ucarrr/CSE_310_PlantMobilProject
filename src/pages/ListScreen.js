import React from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


import { Icon } from 'react-native-elements'


function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.fabContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate('ModalScreen')}
          style={styles.fabButton}>
       
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20
  },
  fabButton: {
    backgroundColor: 'gray',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {

  },
})
export default ListScreen