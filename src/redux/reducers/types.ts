import { GetForecastSuccessAction, GetForecastErrorAction } from '../actions'

export interface Current {
  temp_c: number
  temp_f: number
  condition: {
    text: string
    icon: string
  },

}

export interface Forecast {

}

export interface Location {
  name: string
  country: string
  tz_id: string
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
