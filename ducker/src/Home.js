import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Linking } from 'react-native'
import duckerLogo from './images/ducker.jpg'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DUCKER</Text>
        <Image source={duckerLogo} style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 40,
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
})
