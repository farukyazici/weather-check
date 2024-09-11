import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import client from '../../api/client'

export const HomePage: React.FC = () => {
  useEffect(() => {
    client.get('/current.json', {
      params: {
        q: 'London'
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.trace(err)
    })
  }, [])
  return (
    <View style={styles.container}>
        <Text>Weather Check</Text>
    </View>
  )
}
