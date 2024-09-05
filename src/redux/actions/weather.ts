import { GET_CURRENT_WEATHER, GET_FORECAST, SET_CURRENT_WEATHER, SET_FORECAST } from '../action-types'
import { CurrentWeather } from '../reducers'
import { GetCurrentWeatherAction, GetForecastAction, SetCurrentWeatherAction, SetForecastAction } from './types'

export const getCurrentWeather = (city: string): GetCurrentWeatherAction => ({
    type: GET_CURRENT_WEATHER,
    city
})

export const setCurrentWeather = (currentWeather: CurrentWeather): SetCurrentWeatherAction => ({
    type: SET_CURRENT_WEATHER,
    currentWeather
})

export const getForecast = (city: string): GetForecastAction => ({
    type: GET_FORECAST,
    city
})

export const setForecast = (forecast: string): SetForecastAction => ({
    type: SET_FORECAST,
    forecast
})
