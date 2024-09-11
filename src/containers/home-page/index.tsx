import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getForecastRequest, selectLocation } from '../../redux'
import { Location } from '../../redux/reducers'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const location = useSelector(selectLocation) as Location
  return (
    <ScrollView style={styles.container}>
        <Text>Weather Check</Text>
        <TextInput value={city} onChangeText={setCity} />
        <TouchableOpacity onPress={() => {
          dispatch(getForecastRequest(city))
        }}>
          <Text>SEARCH</Text>
        </TouchableOpacity>
        <Text>{location?.name}, {location?.country}</Text>
        <Text>{location?.tz_id}</Text>
    </ScrollView>
  )
}
