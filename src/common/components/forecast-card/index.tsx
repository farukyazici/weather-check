import React from 'react'
import { Text, Image, View } from 'react-native'
import dayjs from 'dayjs'
import styles from './styles'
import { Hour } from '../../../redux'
import { getWeatherText } from '../..'

interface Props {
    hour: Hour
}

export const ForecastCard: React.FC<Props> = ({ hour }) =>
    <View style={styles.container}>
      <Text>{dayjs(hour?.time).format('HH:mm')}</Text>
      <Image style={styles.icon} source={{ uri: `https:${hour?.condition?.icon}` }} />
      <Text style={styles.temperature}>{getWeatherText(hour)}</Text>
    </View>
