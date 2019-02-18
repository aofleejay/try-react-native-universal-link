import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import About from './About'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    path: '/',
  },
  About: {
    screen: About,
    path: '/about',
  },
})

const AppContainer = createAppContainer(AppNavigator)

export default () => <AppContainer uriPrefix="https://ducker.netlify.com" />;
