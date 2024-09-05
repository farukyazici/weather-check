import { SetCurrentWeatherAction, GetCurrentWeatherAction, GetForecastAction, SetForecastAction } from '../actions'

export interface WeatherState {
    currentWeather: CurrentWeather | null
    forecast: any
}

export interface CurrentWeather {
  currentWeather: {
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
}

export type WeatherActionTypes = SetCurrentWeatherAction | GetCurrentWeatherAction | GetForecastAction | SetForecastAction
