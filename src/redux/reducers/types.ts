import { GetForecastSuccessAction, GetForecastErrorAction } from '../actions'

export interface Current {

}

export interface Forecast {

}

export interface Location {
  name: string
  country: string
}

export interface Weather {
    current: Current | null
    forecast: any
    location: Location
}

export interface WeatherState {
  weather: Weather | null
  error: string | null
}

export type WeatherActionTypes = GetForecastSuccessAction | GetForecastErrorAction
