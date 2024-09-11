import { GET_FORECAST_ERROR, GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS } from '../action-types'

export const getForecastRequest = (city: string) => ({
    type: GET_FORECAST_REQUEST,
    city
})

export const getForecastSuccess = (current: string, forecast: string) => ({
    type: GET_FORECAST_SUCCESS,
    current,
    forecast
})

export const getForecastError = (error: string) => ({
    type: GET_FORECAST_ERROR,
    error
})
