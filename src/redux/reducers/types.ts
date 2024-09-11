import { GetForecastSuccessAction, GetForecastErrorAction } from '../actions'

export interface Current {
  temp_c: number
  temp_f: number
  condition: Condition
}

interface Condition {
  text: string
  icon: string
}

export interface ForecastDay {
  hour: Hour[]
}

export interface Hour {
  time: string
  condition: Condition
  temp_c: string,
  temp_f: string
}

export interface Location {
  name: string
  country: string
  tz_id: string
  localtime: string
}

export interface Weather {
    current: Current
    hours: any
    location: Location
}

export interface WeatherState {
  weather: Weather | null
  error: string | null
}

export type WeatherActionTypes = GetForecastSuccessAction | GetForecastErrorAction
