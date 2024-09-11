import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, Image, FlatList, View } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getForecastRequest, selectCurrent, selectLocation, Current, Location, selectForecast, Hour } from '../../redux'
import dayjs from 'dayjs'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const location = useSelector(selectLocation) as Location
  const current = useSelector(selectCurrent) as Current
  const hours = useSelector(selectForecast) as Hour[]
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Weather Check</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="Search..." />
          <TouchableOpacity style={styles.searchButton} onPress={() => dispatch(getForecastRequest(city))} >
            <Text>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="middle">{location?.name}, {location?.country}</Text>
        <Text>{location?.tz_id}</Text>
        <View style={styles.currentCondition}>
          <Image style={styles.currentIcon} source={{ uri: `https:${current?.condition?.icon}` }}/>
          <View style={styles.currentDetails}>
            <Text style={styles.weatherText}>{current?.condition?.text}</Text>
            <Text style={styles.tempText}>{current?.temp_c}ºC</Text>
            <Text style={styles.timeText}>{dayjs(location?.localtime).format('HH:mm')}</Text>
          </View>
        </View>
        <FlatList
          horizontal
          data={hours}
          renderItem={({ item }) => <View>
            <Text>{dayjs(item?.time).format('HH:mm')}</Text>
            <Image style={{ width: 48, height: 48 }} source={{ uri: `https:${item?.condition?.icon}` }}/>
            <Text>{item?.temp_c}</Text>
          </View>}
          keyExtractor={item => item.time}
      />
    </View>
  )
}
