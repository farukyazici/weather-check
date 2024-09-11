import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, Image, FlatList, View, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { getForecastRequest, selectCurrent, selectLocation, Current, Location, selectForecast, Hour, selectError } from '../../redux'
import styles from './styles'
import { ForecastCard, getWeatherText } from '../../common'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const location = useSelector(selectLocation) as Location
  const current = useSelector(selectCurrent) as Current
  const hours = useSelector(selectForecast) as Hour[]
  const error = useSelector(selectError)
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Weather Check</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="Search..." />
          {city ? <TouchableOpacity onPress={() => setCity('')}><Text style={styles.clearBtn}>x</Text></TouchableOpacity> : null}
          <TouchableOpacity testID="search-button" style={styles.searchButton} onPress={() =>
            !city?.length ? Alert.alert('Please enter a city') : dispatch(getForecastRequest(city))} >
            <Text style={styles.searchButtonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        {location ? <>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="middle">{location?.name}, {location?.country}</Text>
        <Text style={styles.timezone}>{location?.tz_id}</Text>
        <View style={styles.currentContainer}>
          <Image style={styles.currentIcon} source={{ uri: `https:${current?.condition?.icon}` }}/>
          <View>
            <Text style={styles.weather}>{current?.condition?.text}</Text>
            <Text style={styles.temperature}>{getWeatherText(current)}</Text>
            <Text style={styles.time}>{dayjs().format('HH:mm')}</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          horizontal
          data={hours}
          renderItem={({ item }) => <ForecastCard hour={item} />}
          keyExtractor={item => item.time}
      /></> : null }
      {error ? <View style={styles.errorContainer}>
        <Text style={styles.errorIcon}>!</Text>
        <Text style={styles.error}>{error}</Text> 
        </View> : null}
    </View>
  )
}
