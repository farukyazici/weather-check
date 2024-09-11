import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { getForecastRequest } from '../../redux/actions'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('kars')
  return (
    <ScrollView style={styles.container}>
        <Text>Weather Check</Text>
        <TextInput value={city} onChangeText={setCity} />
        <TouchableOpacity onPress={() => {
          dispatch(getForecastRequest(city))
        }}>
          <Text>SEARCH</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}
