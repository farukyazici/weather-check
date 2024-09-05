import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import { HomePage } from './containers'
import { colors } from './theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <HomePage />
    </SafeAreaView>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cyan2
  }
})

export default App
