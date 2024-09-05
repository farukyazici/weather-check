import { SET_CURRENT_WEATHER, SET_FORECAST } from '../action-types'
import { WeatherActionTypes, WeatherState } from './types'

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null
}

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes,
): WeatherState => {
  switch (action.type) {
    case SET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.currentWeather
      }
    case SET_FORECAST:
      return {
        ...state,
        forecast: action.forecast
      }
    default:
      return state
  }
}

export default weatherReducer
