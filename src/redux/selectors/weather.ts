import { createSelector } from 'reselect'
import { WeatherState } from '../reducers'

export const selectLocation = createSelector(
  [(state: {weatherState: WeatherState}) => state?.weatherState?.weather],
  weather => {
    return weather?.location
  },
)

export const selectCurrent = createSelector(
  [(state: {weatherState: WeatherState}) => state?.weatherState?.weather],
  weather => {
    return weather?.current
  },
)

export const selectForecast = createSelector(
  [(state: {weatherState: WeatherState}) => state?.weatherState?.weather],
  weather => {
    return weather?.hours
  },
)

export const selectError = createSelector(
  [(state: {weatherState: WeatherState}) => state?.weatherState],
  weatherState => {
    return weatherState?.error
  },
)
