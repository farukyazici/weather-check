import { GET_FORECAST_ERROR, GET_FORECAST_SUCCESS } from '../action-types'
import { WeatherActionTypes, WeatherState } from './types'

export const initialState: WeatherState = {
  weather: null,
  error: null
}

const weatherReducer = (
  state = initialState,
  action?: WeatherActionTypes,
): WeatherState => {
  switch (action?.type) {
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        weather: action?.weather,
        error: null
      }
    case GET_FORECAST_ERROR:
      return {
        ...state,
        weather: null,
        error: action?.error
      }
    default:
      return state
  }
}

export default weatherReducer
