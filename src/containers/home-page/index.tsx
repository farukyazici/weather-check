import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getForecastRequest, selectCurrent, selectLocation, Current, Location } from '../../redux'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const location = useSelector(selectLocation) as Location
  const current = useSelector(selectCurrent) as Current
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
        <Text>{current?.condition?.text}</Text>
        <Text>{current?.temp_c}</Text>
        <Image style={{ width: 48, height: 48 }} source={{ uri: `https:${current?.condition?.icon}` }}/>
        <Text>{location?.localtime}</Text>
    </ScrollView>
  )
}
