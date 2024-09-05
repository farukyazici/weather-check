import { GET_CURRENT_WEATHER, GET_FORECAST, SET_CURRENT_WEATHER, SET_FORECAST } from '../action-types'
import { CurrentWeather } from '../reducers'

export interface GetCurrentWeatherAction {
    type: typeof GET_CURRENT_WEATHER;
    city: string;
}

export interface SetCurrentWeatherAction {
    type: typeof SET_CURRENT_WEATHER;
    currentWeather: CurrentWeather;
}

export interface GetForecastAction {
    type: typeof GET_FORECAST;
    city: string;
}

export interface SetForecastAction {
    type: typeof SET_FORECAST;
    forecast: string;
}
