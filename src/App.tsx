import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import { HomePage } from './containers'
import { colors } from './theme'

const App: React.JSX.Element = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar />
    <HomePage />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cyan2
  }
})

export default App
