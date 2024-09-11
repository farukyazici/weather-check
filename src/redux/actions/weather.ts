import { GET_FORECAST_ERROR, GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS } from '../action-types'
import { Weather } from '../reducers'

export const getForecastRequest = (city: string) => ({
    type: GET_FORECAST_REQUEST,
    city
})

export const getForecastSuccess = (weather: Weather) => ({
    type: GET_FORECAST_SUCCESS,
    weather
})

export const getForecastError = (error: string) => ({
    type: GET_FORECAST_ERROR,
    error
})
