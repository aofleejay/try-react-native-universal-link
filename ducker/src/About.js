import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import duckerLogo from './images/ducker.jpg'

export default class About extends Component {
  componentDidMount() {
    console.warn(this.props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
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
