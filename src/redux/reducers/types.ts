import { GetForecastSuccessAction, GetForecastErrorAction } from '../actions'

export interface WeatherState {
    current: CurrentWeather | null
    forecast: any
    error: any
}

export interface CurrentWeather {
  current?: {
    temp_c: number
    feelslike_c: number
    condition: {
      text: string
      icon: string
      code: number
    }
    location: {
        name: string
        country: string
    }
  } | null
  forecast: any
  error: any
}

export type WeatherActionTypes = GetForecastSuccessAction | GetForecastErrorAction
