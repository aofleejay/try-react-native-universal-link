import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native'
import duckerLogo from './images/ducker.jpg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {}
export default class App extends Component<Props> {
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
