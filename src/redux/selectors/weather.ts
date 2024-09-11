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
